import { db } from '../config/firebase';
import { doc, setDoc, updateDoc, increment, getDoc, onSnapshot, query, where, collection, orderBy, limit } from 'firebase/firestore';
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

      // 1. Update Daily Stats (for Traffic Chart)
      // Use setDoc with merge: true to create if not exists
      const dailyRef = doc(db, COLLECTIONS.DAILY, today);
      await setDoc(dailyRef, {
        date: today,
        visitors: increment(1),
        page_views: increment(1) // Simple page view tracking
      }, { merge: true });

      // 2. Update Aggregates (for Pie/List stats)
      const aggRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');

      // We need to use dot notation for nested field updates in Firestore
      const updates: any = {};
      updates[`os.${osName}`] = increment(1);
      updates[`browsers.${browserName}`] = increment(1);
      updates[`devices.${deviceType}`] = increment(1);
      updates['total_visits'] = increment(1);
      updates['total_page_views'] = increment(1);

      await setDoc(aggRef, updates, { merge: true });

    } catch (error) {
      console.error("Failed to log analytics:", error);
      // Fail silently to not block user flow
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

  // Real-time listener for Daily Traffic (Last 7 days)
  // Note: Firestore doesn't support "limit from end" easily with dynamic dates in a single query without complex indexes.
  // For simplicity and cost, we will fetch the specific documents for the last 7 days.
  // Since we know the IDs (YYYY-MM-DD), we can't easily subscribe to "last 7 docs" dynamically without a range query.
  // A range query on 'date' field requires the field to exist.
  // Let's use a query on the collection with range filter if possible, or just document listeners.
  // Query is better for "last N days".
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

  // Real-time version using query (Requires 'date' field in docs which we added)
  subscribeToDailyTraffic(days = 7, callback: (data: any[]) => void) {
      // Calculate start date
      const d = new Date();
      d.setDate(d.getDate() - days);
      const startDate = d.toISOString().split('T')[0];

      // Query: date >= startDate
      // Note: This requires the 'date' field to be stored in the doc (we added it in logVisit)
      const q = query(
          collection(db, COLLECTIONS.DAILY),
          where('date', '>=', startDate),
          orderBy('date', 'asc')
      );

      return onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map(doc => doc.data());
          // Fill in missing days if needed (gap filling), strictly the query returns what exists.
          // For a perfect chart, we might want to merge with a complete date list client-side.
          callback(data);
      });
  }
}

export const analyticsService = new AnalyticsService();
