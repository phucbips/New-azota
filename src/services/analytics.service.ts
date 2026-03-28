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

  async logPageView() {
    try {
        const today = new Date().toISOString().split('T')[0];
        const dailyRef = doc(db, COLLECTIONS.DAILY, today);
        const aggRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');

        const updates = {
            date: today,
            page_views: increment(1)
        };

        // Fire and forget - separate promises to avoid blocking
        const p1 = setDoc(dailyRef, updates, { merge: true });
        const p2 = setDoc(aggRef, { total_page_views: increment(1) }, { merge: true });

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
