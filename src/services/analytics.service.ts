import { db } from '../config/firebase';
import { doc, setDoc, updateDoc, increment, getDoc, onSnapshot, query, where, collection, orderBy, limit, runTransaction } from 'firebase/firestore';
import { UAParser } from 'ua-parser-js';

const COLLECTIONS = {
  DAILY: 'analytics_daily',
  AGGREGATES: 'analytics_aggregates',
};

class AnalyticsService {
  private parser: UAParser;

  constructor() {
    this.parser = new UAParser();
  }

  async logVisit(uid: string) {
    try {
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
      const result = this.parser.getResult();

      const osName = result.os.name || 'Unknown';
      const browserName = result.browser.name || 'Unknown';
      const deviceType = result.device.type || 'Desktop'; // ua-parser returns undefined for desktop usually

      const dailyRef = doc(db, COLLECTIONS.DAILY, today);
      const visitorRef = doc(db, COLLECTIONS.DAILY, today, 'visitors', uid);
      const aggRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');

      await runTransaction(db, async (transaction) => {
        const visitorDoc = await transaction.get(visitorRef);

        if (!visitorDoc.exists()) {
            // New unique visitor for today
            transaction.set(visitorRef, { timestamp: new Date() });

            // Increment daily visitors
            // Note: We do NOT increment page_views here anymore, logPageView handles that.
            transaction.set(dailyRef, {
                date: today,
                visitors: increment(1)
            }, { merge: true });

            // Update Aggregates (Demographics based on unique visits)
            const updates: any = {};
            updates[`os.${osName}`] = increment(1);
            updates[`browsers.${browserName}`] = increment(1);
            updates[`devices.${deviceType}`] = increment(1);
            updates['total_visits'] = increment(1);

            transaction.set(aggRef, updates, { merge: true });
        }
      });

    } catch (error) {
      console.error("Failed to log analytics:", error);
      // Fail silently to not block user flow
    }
  }

  private detectBrowser(ua: string): string {
    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("Edg")) return "Edge";
    if (ua.includes("Chrome")) return "Chrome";
    if (ua.includes("Safari")) return "Safari";
    if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
    return "Other";
  }

  private detectDevice(ua: string, width: number): string {
    if (/Mobi|Android/i.test(ua) || width < 768) return "Mobile";
    if (/Tablet|iPad/i.test(ua) || (width >= 768 && width < 1024)) return "Tablet";
    return "Desktop";
  }

  async logPageView() {
    try {
        const today = new Date().toISOString().split('T')[0];
        const dailyRef = doc(db, COLLECTIONS.DAILY, today);
        const aggRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');

        const ua = navigator.userAgent;
        const browserName = this.detectBrowser(ua);
        const deviceType = this.detectDevice(ua, window.innerWidth);
        const osName = /Windows/i.test(ua) ? "Windows" : /Mac/i.test(ua) ? "Mac OS" : /Linux/i.test(ua) ? "Linux" : /Android/i.test(ua) ? "Android" : /iOS|iPhone|iPad/i.test(ua) ? "iOS" : "Other";

        const updates = {
            date: today,
            page_views: increment(1)
        };

        const aggUpdates: any = {
            total_page_views: increment(1)
        };
        aggUpdates[`os.${osName}`] = increment(1);
        aggUpdates[`browsers.${browserName}`] = increment(1);
        aggUpdates[`devices.${deviceType}`] = increment(1);

        // Fire and forget - separate promises to avoid blocking
        const p1 = setDoc(dailyRef, updates, { merge: true });
        const p2 = setDoc(aggRef, aggUpdates, { merge: true });

        await Promise.all([p1, p2]);

      } catch (error) {
          console.error("Failed to log page view:", error);
      }
  }

  // Real-time listener for Aggregated Stats (OS, Device, Browser)
  subscribeToAggregates(callback: (data: any) => void) {
      const docRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');
      return onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
              callback(doc.data());
          } else {
              callback({ os: {}, browsers: {}, devices: {}, total_visits: 0 });
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
          const data = snapshot.docs.map(doc => doc.data());
          callback(data);
      });
  }
}

export const analyticsService = new AnalyticsService();
