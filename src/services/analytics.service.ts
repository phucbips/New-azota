import { db } from '../config/firebase';
import { doc, setDoc, increment, getDoc, onSnapshot, query, where, collection, orderBy, runTransaction } from 'firebase/firestore';
import { UAParser } from 'ua-parser-js';

const COLLECTIONS = {
  DAILY: 'analytics_daily',
  AGGREGATES: 'analytics_aggregates',
};

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
  return trimmed || 'Other';
}

function normalizeBrowserLabel(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return 'Other';
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

  // 1. Read nested maps if present
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

  // 2. Read dotted top-level keys written by setDoc({ "os.Windows": increment(1) }, { merge: true })
  for (const [fullKey, val] of Object.entries(raw)) {
    if (fullKey.startsWith('os.')) {
      const subKey = fullKey.slice(3);
      addCount(os, normalizeOsLabel(subKey), val);
    } else if (fullKey.startsWith('browsers.')) {
      const subKey = fullKey.slice(9);
      addCount(browsers, normalizeBrowserLabel(subKey), val);
    } else if (fullKey.startsWith('devices.')) {
      const subKey = fullKey.slice(8);
      addCount(devices, normalizeDeviceLabel(subKey), val);
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

  async logVisit(uid: string) {
    try {
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
      const result = this.parser.getResult();

      const osName = normalizeOsLabel(result.os.name || 'Other');
      const browserName = normalizeBrowserLabel(result.browser.name || 'Other');
      const deviceType = normalizeDeviceLabel(result.device.type || 'Desktop');

      const dailyRef = doc(db, COLLECTIONS.DAILY, today);
      const visitorRef = doc(db, COLLECTIONS.DAILY, today, 'visitors', uid);
      const aggRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');

      await runTransaction(db, async (transaction) => {
        const visitorDoc = await transaction.get(visitorRef);

        if (!visitorDoc.exists()) {
          // New unique visitor for today
          transaction.set(visitorRef, { timestamp: new Date() });

          // Increment daily visitors
          transaction.set(
            dailyRef,
            {
              date: today,
              visitors: increment(1),
            },
            { merge: true }
          );

          // Update Aggregates using nested maps so Firestore merges properly
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
    } catch (error) {
      console.error('Failed to log analytics:', error);
    }
  }

  private detectBrowser(ua: string): string {
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Edg')) return 'Edge';
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
    return 'Other';
  }

  private detectDevice(ua: string, width: number): string {
    if (/Mobi|Android/i.test(ua) || width < 768) return 'Mobile';
    if (/Tablet|iPad/i.test(ua) || (width >= 768 && width < 1024)) return 'Tablet';
    return 'Desktop';
  }

  async logPageView() {
    try {
      const today = new Date().toISOString().split('T')[0];
      const dailyRef = doc(db, COLLECTIONS.DAILY, today);
      const aggRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');

      const ua = navigator.userAgent;
      const browserName = this.detectBrowser(ua);
      const deviceType = this.detectDevice(ua, window.innerWidth);
      const osName = /Windows/i.test(ua)
        ? 'Windows'
        : /iOS|iPhone|iPad/i.test(ua)
          ? 'iOS'
          : /Mac/i.test(ua)
            ? 'macOS'
            : /Android/i.test(ua)
              ? 'Android'
              : /Linux/i.test(ua)
                ? 'Linux'
                : 'Other';

      const updates = {
        date: today,
        page_views: increment(1),
      };

      const aggUpdates = {
        total_page_views: increment(1),
        os: { [osName]: increment(1) },
        browsers: { [browserName]: increment(1) },
        devices: { [deviceType]: increment(1) },
      };

      const p1 = setDoc(dailyRef, updates, { merge: true });
      const p2 = setDoc(aggRef, aggUpdates, { merge: true });

      await Promise.all([p1, p2]);
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
