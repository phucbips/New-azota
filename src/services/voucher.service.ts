import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface Voucher {
  id: string;
  code: string;
  type: 'percent' | 'fixed';
  value: number; // 10% or 100,000 VND
  minOrderValue?: number;
  maxDiscount?: number; // Maximum discount amount for percentage vouchers
  expiresAt: Timestamp | null;
  usageLimit?: number;
  usageCount: number;
  isActive: boolean;
  createdAt: Timestamp;
}

export const voucherService = {
  getVouchers: async (): Promise<Voucher[]> => {
    const q = query(collection(db, 'vouchers'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Voucher));
  },

  getVoucherByCode: async (code: string): Promise<Voucher | null> => {
    const q = query(collection(db, 'vouchers'), where('code', '==', code.toUpperCase()), where('isActive', '==', true));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as Voucher;
  },

  createVoucher: async (voucherData: Omit<Voucher, 'id' | 'createdAt' | 'usageCount'>): Promise<string> => {
    const docRef = doc(collection(db, 'vouchers'));
    await setDoc(docRef, {
      ...voucherData,
      code: voucherData.code.toUpperCase(),
      createdAt: Timestamp.now(),
      usageCount: 0
    });
    return docRef.id;
  },

  updateVoucher: async (id: string, voucherData: Partial<Omit<Voucher, 'id' | 'createdAt' | 'usageCount'>>) => {
    const docRef = doc(db, 'vouchers', id);
    if (voucherData.code) {
        voucherData.code = voucherData.code.toUpperCase();
    }
    await updateDoc(docRef, voucherData);
  },

  deleteVoucher: async (id: string) => {
    await deleteDoc(doc(db, 'vouchers', id));
  },

  incrementUsage: async (id: string) => {
    const docRef = doc(db, 'vouchers', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const currentCount = docSnap.data().usageCount || 0;
        await updateDoc(docRef, { usageCount: currentCount + 1 });
    }
  }
};
