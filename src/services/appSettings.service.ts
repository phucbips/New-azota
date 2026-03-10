import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface AppSettings {
  contact: {
    hotline: string;
    email: string;
    zaloUrl: string;
    facebookUrl: string;
  };
  integrations: {
    payosClientId: string;
    payosApiKey: string;
    payosChecksumKey: string;
  };
  features: {
    enableRegistration: boolean;
    maintenanceMode: boolean;
  };
  homepage: {
    heroTitle: string;
    heroSubtitle: string;
    showHero: boolean;
    showCourses: boolean;
    showStats: boolean;
    showAbout: boolean;
    showTestimonials: boolean;
  };
}

const DEFAULT_SETTINGS: AppSettings = {
  contact: {
    hotline: '1900 xxxx',
    email: 'support@example.com',
    zaloUrl: 'https://zalo.me/xxxx',
    facebookUrl: 'https://facebook.com/xxxx',
  },
  integrations: {
    payosClientId: '',
    payosApiKey: '',
    payosChecksumKey: '',
  },
  features: {
    enableRegistration: true,
    maintenanceMode: false,
  },
  homepage: {
    heroTitle: 'Học Tập Không Giới Hạn',
    heroSubtitle: 'Khám phá hàng ngàn khóa học chất lượng từ các chuyên gia hàng đầu. Nâng cao kỹ năng của bạn ngay hôm nay.',
    showHero: true,
    showCourses: true,
    showStats: true,
    showAbout: true,
    showTestimonials: true,
  },
};

const SETTINGS_DOC_ID = 'general';
const SETTINGS_COLLECTION = 'app_settings';

class AppSettingsService {
  /**
   * Fetch current app settings. Creates default settings if they don't exist.
   */
  async getSettings(): Promise<AppSettings> {
    try {
      const docRef = doc(db, SETTINGS_COLLECTION, SETTINGS_DOC_ID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { ...DEFAULT_SETTINGS, ...docSnap.data() } as AppSettings;
      } else {
        await this.updateSettings(DEFAULT_SETTINGS);
        return DEFAULT_SETTINGS;
      }
    } catch (error) {
      console.error('Error fetching app settings:', error);
      return DEFAULT_SETTINGS;
    }
  }

  /**
   * Update app settings completely or partially
   */
  async updateSettings(settings: Partial<AppSettings>): Promise<void> {
    try {
      const docRef = doc(db, SETTINGS_COLLECTION, SETTINGS_DOC_ID);
      await setDoc(docRef, settings, { merge: true });
    } catch (error) {
      console.error('Error updating app settings:', error);
      throw error;
    }
  }

  /**
   * Subscribe to real-time app settings updates
   */
  subscribeToSettings(callback: (settings: AppSettings) => void): () => void {
    const docRef = doc(db, SETTINGS_COLLECTION, SETTINGS_DOC_ID);

    return onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          callback({ ...DEFAULT_SETTINGS, ...docSnap.data() } as AppSettings);
        } else {
          callback(DEFAULT_SETTINGS);
        }
      },
      (error) => {
        console.error('Error subscribing to app settings:', error);
      }
    );
  }
}

export const appSettingsService = new AppSettingsService();
