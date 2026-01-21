import { db } from '../config/firebase';
import { doc, setDoc, updateDoc, increment, getDoc, Timestamp } from 'firebase/firestore';
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
        // We could track unique visitors by storing UIDs in a subcollection, but for this simplified dashboard, total visits is fine.
        // Or strictly: we only increment if this user hasn't logged in today (requires client side check or storing lastLoginDate on user)
      }, { merge: true });

      // 2. Update Aggregates (for Pie/List stats)
      const aggRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');

      // We need to use dot notation for nested field updates in Firestore
      const updates: any = {};
      updates[`os.${osName}`] = increment(1);
      updates[`browsers.${browserName}`] = increment(1);
      updates[`devices.${deviceType}`] = increment(1);
      updates['total_visits'] = increment(1);

      await setDoc(aggRef, updates, { merge: true });

    } catch (error) {
      console.error("Failed to log analytics:", error);
      // Fail silently to not block user flow
    }
  }

  async getDailyTraffic(days = 7) {
    // In a real app, query by date range.
    // Here we will fetch individual docs for the last 7 days for simplicity given the key structure.
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
           stats.push({ date: dateStr, visitors: 0 });
       }
    }
    return stats;
  }

  async getAggregatedStats() {
      const docRef = doc(db, COLLECTIONS.AGGREGATES, 'global_stats');
      const snap = await getDoc(docRef);
      if (snap.exists()) {
          return snap.data();
      }
      return { os: {}, browsers: {}, devices: {}, total_visits: 0 };
  }
}

export const analyticsService = new AnalyticsService();
