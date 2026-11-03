import { db } from '../config/firebase';
import {
  doc,
  setDoc,
  increment,
  getDoc,
  onSnapshot,
  query,
  where,
  collection,
  orderBy,
  runTransaction,
} from 'firebase/firestore';
import { UAParser } from 'ua-parser-js';

const COLLECTIONS = {
  DAILY: 'analytics_daily',
  AGGREGATES: 'analytics_aggregates',
};

const VISITOR_ID_KEY = 'azota_real_visitor_id';

function isBotOrAutomated(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return true;
  if ((navigator as any).webdriver) return true;
  const ua = navigator.userAgent || '';
  if (!ua) return true;
  return /bot|crawler|spider|crawling|headless|lighthouse|vercel|prerender|phantomjs|slurp|mediapartners|facebookexternalhit|whatsapp|telegrambot|discordbot|bingpreview|playwright|puppeteer|cypress/i.test(
    ua
  );
}

function getOrCreateVisitorId(): string {
  try {
    let id = localStorage.getItem(VISITOR_ID_KEY);
    if (!id) {
      if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        id = crypto.randomUUID();
      } else {
        id = `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
      }
      localStorage.setItem(VISITOR_ID_KEY, id);
    }
    return id;
  } catch {
    return `anon_${Date.now().toString(36)}`;
  }
}

function normalizeDeviceLabel(raw: string): string {
  const lower = raw.trim().toLowerCase();
  if (lower === 'mobile') return 'Mobile';
  if (lower === 'tablet') return 'Tablet';
  if (lower === 'desktop') return 'Desktop';
  return raw.trim() || 'Desktop';
}

function normalizeOsLabel(raw: string): string {
  const trimmed = raw.trim();
  const lower = trimmed.toLowerCase();
  if (lower === 'mac os' || lower === 'macos') return 'macOS';
  if (lower === 'ios') return 'iOS';
  if (lower === 'windows') return 'Windows';
  if (lower === 'android') return 'Android';
  if (lower === 'linux') return 'Linux';
  return trimmed || 'Khác';
}

function normalizeBrowserLabel(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return 'Khác';
  return trimmed;
}

function normalizeAggregates(raw: Record<string, any> | undefined) {
  const os: Record<string, number> = {};
  const browsers: Record<string, number> = {};
  const devices: Record<string, number> = {};

  if (!raw) {
    return { os, browsers, devices, total_visits: 0, total_page_views: 0 };
  }

  const addCount = (target: Record<string, number>, key: string, val: unknown) => {
    const num = Number(val);
    if (!Number.isFinite(num) || num <= 0) return;
    target[key] = (target[key] || 0) + num;
  };

  if (raw.os && typeof raw.os === 'object') {
    for (const [k, v] of Object.entries(raw.os)) {
      addCount(os, normalizeOsLabel(k), v);
    }
  }
  if (raw.browsers && typeof raw.browsers === 'object') {
    for (const [k, v] of Object.entries(raw.browsers)) {
      addCount(browsers, normalizeBrowserLabel(k), v);
    }
  }
  if (raw.devices && typeof raw.devices === 'object') {
    for (const [k, v] of Object.entries(raw.devices)) {
      addCount(devices, normalizeDeviceLabel(k), v);
    }
  }

  return {
    os,
    browsers,
    devices,
    total_visits: Number(raw.total_visits) || 0,
    total_page_views: Number(raw.total_page_views) || 0,
  };
}

class AnalyticsService {
  private parser: UAParser;

  constructor() {
    this.parser = new UAParser();
  }

  private getClientDemographics() {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    this.parser.setUA(ua);
    const result = this.parser.getResult();

    const osName = normalizeOsLabel(
      result.os.name ||
        (/Windows/i.test(ua)
          ? 'Windows'
          : /iOS|iPhone|iPad/i.test(ua)
            ? 'iOS'
            : /Mac/i.test(ua)
              ? 'macOS'
              : /Android/i.test(ua)
                ? 'Android'
                : /Linux/i.test(ua)
                  ? 'Linux'
                  : 'Khác')
    );

    const browserName = normalizeBrowserLabel(
      result.browser.name ||
        (ua.includes('Edg')
          ? 'Edge'
          : ua.includes('Chrome')
            ? 'Chrome'
            : ua.includes('Firefox')
              ? 'Firefox'
              : ua.includes('Safari')
                ? 'Safari'
                : 'Khác')
    );

    const deviceType = normalizeDeviceLabel(
      result.device.type ||
        (/Mobi|Android/i.test(ua)
          ? 'Mobile'
          : /Tablet|iPad/i.test(ua)
            ? 'Tablet'
            : 'Desktop')
    );

    return { osName, browserName, deviceType };
  }

  private async ensureDailyUniqueVisitor(): Promise<void> {
    if (isBotOrAutomated()) return;

    const today = new Date().toISOString().split('T')[0];
    const visitorId = getOrCreateVisitorId();
    const { osName, browserName, deviceType } = this.getClientDemographics();

    const dailyRef = doc(db, COLLECTIONS.DAILY, today);
    const visitorRef = doc(db, COLLECTIONS.DAILY, today, 'visitors', visitorId);
    const aggRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');

    await runTransaction(db, async (transaction) => {
      const visitorDoc = await transaction.get(visitorRef);
      if (!visitorDoc.exists()) {
        transaction.set(visitorRef, {
          timestamp: new Date(),
          os: osName,
          browser: browserName,
          device: deviceType,
        });

        transaction.set(
          dailyRef,
          {
            date: today,
            visitors: increment(1),
          },
          { merge: true }
        );

        transaction.set(
          aggRef,
          {
            os: { [osName]: increment(1) },
            browsers: { [browserName]: increment(1) },
            devices: { [deviceType]: increment(1) },
            total_visits: increment(1),
          },
          { merge: true }
        );
      }
    });
  }

  async logVisit(_uid: string) {
    try {
      await this.ensureDailyUniqueVisitor();
    } catch (error) {
      console.error('Failed to log analytics visit:', error);
    }
  }

  async logPageView() {
    try {
      if (isBotOrAutomated()) return;

      const today = new Date().toISOString().split('T')[0];
      const dailyRef = doc(db, COLLECTIONS.DAILY, today);
      const aggRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');

      await Promise.all([
        this.ensureDailyUniqueVisitor(),
        setDoc(
          dailyRef,
          {
            date: today,
            page_views: increment(1),
          },
          { merge: true }
        ),
        setDoc(
          aggRef,
          {
            total_page_views: increment(1),
          },
          { merge: true }
        ),
      ]);
    } catch (error) {
      console.error('Failed to log page view:', error);
    }
  }

  // Real-time listener for Aggregated Stats (OS, Device, Browser)
  subscribeToAggregates(callback: (data: any) => void) {
    const docRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');
    return onSnapshot(docRef, (snap) => {
      if (snap.exists()) {
        callback(normalizeAggregates(snap.data()));
      } else {
        callback({ os: {}, browsers: {}, devices: {}, total_visits: 0, total_page_views: 0 });
      }
    });
  }

  // Real-time listener for Daily Traffic
  async getDailyTraffic(days = 7) {
    const stats = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];

      const docRef = doc(db, COLLECTIONS.DAILY, dateStr);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        stats.push(snap.data());
      } else {
        stats.push({ date: dateStr, visitors: 0, page_views: 0 });
      }
    }
    return stats;
  }

  subscribeToDailyTraffic(days = 7, callback: (data: any[]) => void) {
    const d = new Date();
    d.setDate(d.getDate() - days);
    const startDate = d.toISOString().split('T')[0];

    const q = query(
      collection(db, COLLECTIONS.DAILY),
      where('date', '>=', startDate),
      orderBy('date', 'asc')
    );

    return onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((docSnap) => docSnap.data());
      callback(data);
    });
  }
}

export const analyticsService = new AnalyticsService();
