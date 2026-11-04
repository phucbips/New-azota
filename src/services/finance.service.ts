import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
  writeBatch,
} from 'firebase/firestore';
import { db } from '../config/firebase';

export type TransactionType = 'income' | 'expense';

export interface FinancialTransaction {
  id: string;
  type: TransactionType;
  category: string;
  amount: number;
  description: string;
  createdBy: string;
  createdAt: Date | any; // Firebase Timestamp
  batchId?: string | null;
}

export interface SalesBatch {
  id: string;
  name: string;
  description?: string;
  status: 'active' | 'closed';
  startedAt: string; // ISO string
  endedAt?: string | null; // ISO string when closed
  createdBy?: string;
}

export const PRE_NOV_BATCH_ID = 'batch_pre_nov_2026';
// 01/11/2026 00:00:00 GMT+7
export const NOV_2026_CUTOFF_MS = new Date('2026-11-01T00:00:00+07:00').getTime();

export const DEFAULT_PRE_NOV_BATCH: SalesBatch = {
  id: PRE_NOV_BATCH_ID,
  name: 'Đợt trước Tháng 11/2026',
  description: 'Toàn bộ dữ liệu thu chi và đơn hàng phát sinh trước ngày 01/11/2026',
  status: 'closed',
  startedAt: '2026-01-01T00:00:00.000Z',
  endedAt: new Date(NOV_2026_CUTOFF_MS - 1).toISOString(),
};

export function getTransactionDateMs(tx: FinancialTransaction): number {
  if (!tx.createdAt) return Date.now();
  if (typeof tx.createdAt?.toMillis === 'function') return tx.createdAt.toMillis();
  if (typeof tx.createdAt?.toDate === 'function') return tx.createdAt.toDate().getTime();
  if (tx.createdAt instanceof Date) return tx.createdAt.getTime();
  if (typeof tx.createdAt?.seconds === 'number') return tx.createdAt.seconds * 1000;
  const parsed = new Date(tx.createdAt).getTime();
  return Number.isFinite(parsed) ? parsed : Date.now();
}

/**
 * Resolves which SalesBatch a transaction belongs to:
 * 1. Explicit `tx.batchId` if present and exists in `batches`.
 * 2. Any transaction before 01/11/2026 belongs to `PRE_NOV_BATCH_ID`.
 * 3. Any transaction whose timestamp falls within a batch's `[startedAt, endedAt]` window.
 * 4. Otherwise `'unassigned'` (developed between batches).
 */
export function resolveTransactionBatchId(
  tx: FinancialTransaction,
  batches: SalesBatch[]
): string {
  if (tx.batchId && batches.some((b) => b.id === tx.batchId)) {
    return tx.batchId;
  }

  const txMs = getTransactionDateMs(tx);
  if (txMs < NOV_2026_CUTOFF_MS) {
    return PRE_NOV_BATCH_ID;
  }

  // Match by time window among post-Nov batches
  for (const batch of batches) {
    if (batch.id === PRE_NOV_BATCH_ID) continue;
    const startMs = new Date(batch.startedAt).getTime();
    const endMs = batch.endedAt ? new Date(batch.endedAt).getTime() : Infinity;
    if (txMs >= startMs && txMs <= endMs) {
      return batch.id;
    }
  }

  return 'unassigned';
}

function normalizeBatchesList(rawBatches: SalesBatch[] | undefined): SalesBatch[] {
  const list = Array.isArray(rawBatches) ? [...rawBatches] : [];
  if (!list.some((b) => b.id === PRE_NOV_BATCH_ID)) {
    list.push(DEFAULT_PRE_NOV_BATCH);
  }
  // Sort newest startedAt first, keeping PRE_NOV_BATCH_ID at the bottom
  return list.sort((a, b) => {
    if (a.id === PRE_NOV_BATCH_ID) return 1;
    if (b.id === PRE_NOV_BATCH_ID) return -1;
    return new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime();
  });
}

class FinanceService {
  private collection = collection(db, 'financial_transactions');
  private batchesDocRef = doc(db, 'app_settings', 'finance_batches');

  async getBatches(): Promise<SalesBatch[]> {
    try {
      const snap = await getDoc(this.batchesDocRef);
      if (snap.exists()) {
        return normalizeBatchesList(snap.data()?.batches);
      }
    } catch (err) {
      console.warn('Could not read finance_batches, using default:', err);
    }
    return [DEFAULT_PRE_NOV_BATCH];
  }

  subscribeToBatches(callback: (batches: SalesBatch[]) => void): () => void {
    return onSnapshot(
      this.batchesDocRef,
      (snap) => {
        if (snap.exists()) {
          callback(normalizeBatchesList(snap.data()?.batches));
        } else {
          callback([DEFAULT_PRE_NOV_BATCH]);
        }
      },
      (err) => {
        console.warn('Error subscribing to finance_batches:', err);
        callback([DEFAULT_PRE_NOV_BATCH]);
      }
    );
  }

  async createBatch(params: {
    name: string;
    description?: string;
    createdBy?: string;
    includeUnassignedSinceNov?: boolean;
    unassignedTransactionIds?: string[];
  }): Promise<SalesBatch> {
    const current = await this.getBatches();
    const nowIso = new Date().toISOString();

    // Automatically close any currently active batch before opening the new one
    const updatedExisting = current.map((b) =>
      b.status === 'active' ? { ...b, status: 'closed' as const, endedAt: nowIso } : b
    );

    const newBatch: SalesBatch = {
      id: `batch_${Date.now()}`,
      name: params.name.trim(),
      description: params.description?.trim() || '',
      status: 'active',
      startedAt: nowIso,
      endedAt: null,
      createdBy: params.createdBy || 'admin',
    };

    const nextBatches = normalizeBatchesList([newBatch, ...updatedExisting]);

    await setDoc(
      this.batchesDocRef,
      {
        batches: nextBatches,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );

    // If user chose to attach unassigned post-Nov transactions into this new batch
    if (
      params.includeUnassignedSinceNov &&
      params.unassignedTransactionIds &&
      params.unassignedTransactionIds.length > 0
    ) {
      const wb = writeBatch(db);
      for (const txId of params.unassignedTransactionIds) {
        wb.update(doc(db, 'financial_transactions', txId), { batchId: newBatch.id });
      }
      await wb.commit();
    }

    return newBatch;
  }

  async closeBatch(batchId: string): Promise<void> {
    const current = await this.getBatches();
    const nowIso = new Date().toISOString();
    const nextBatches = current.map((b) =>
      b.id === batchId ? { ...b, status: 'closed' as const, endedAt: nowIso } : b
    );
    await setDoc(
      this.batchesDocRef,
      {
        batches: nextBatches,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  }

  async reopenBatch(batchId: string): Promise<void> {
    const current = await this.getBatches();
    const nowIso = new Date().toISOString();
    const nextBatches = current.map((b) => {
      if (b.id === batchId) {
        return { ...b, status: 'active' as const, endedAt: null };
      }
      if (b.status === 'active') {
        return { ...b, status: 'closed' as const, endedAt: nowIso };
      }
      return b;
    });
    await setDoc(
      this.batchesDocRef,
      {
        batches: nextBatches,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  }

  async assignTransactionsToBatch(txIds: string[], batchId: string): Promise<void> {
    if (txIds.length === 0) return;
    const wb = writeBatch(db);
    for (const txId of txIds) {
      wb.update(doc(db, 'financial_transactions', txId), { batchId });
    }
    await wb.commit();
  }

  async addTransaction(data: Omit<FinancialTransaction, 'id' | 'createdAt'>): Promise<string> {
    const newDoc = doc(this.collection);
    let batchId = data.batchId;

    if (batchId === undefined) {
      const batches = await this.getBatches();
      const activeBatch = batches.find((b) => b.status === 'active');
      batchId = activeBatch ? activeBatch.id : null;
    }

    await setDoc(newDoc, {
      ...data,
      batchId: batchId ?? null,
      id: newDoc.id,
      createdAt: serverTimestamp(),
    });
    return newDoc.id;
  }

  async updateTransactionBatch(id: string, batchId: string | null): Promise<void> {
    await updateDoc(doc(db, 'financial_transactions', id), { batchId });
  }

  async deleteTransaction(id: string): Promise<void> {
    await deleteDoc(doc(db, 'financial_transactions', id));
  }

  subscribeToTransactions(callback: (transactions: FinancialTransaction[]) => void): () => void {
    const q = query(this.collection, orderBy('createdAt', 'desc'));
    return onSnapshot(q, (snapshot) => {
      const transactions = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return { ...data, id: docSnap.id } as FinancialTransaction;
      });
      callback(transactions);
    });
  }
}

export const financeService = new FinanceService();
