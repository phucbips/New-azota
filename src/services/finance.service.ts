import { collection, doc, getDocs, getDoc, setDoc, deleteDoc, query, orderBy, serverTimestamp, onSnapshot, Timestamp } from 'firebase/firestore';
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
}

class FinanceService {
  private collection = collection(db, 'financial_transactions');

  async addTransaction(data: Omit<FinancialTransaction, 'id' | 'createdAt'>): Promise<string> {
    const newDoc = doc(this.collection);
    await setDoc(newDoc, {
      ...data,
      id: newDoc.id,
      createdAt: serverTimestamp(),
    });
    return newDoc.id;
  }

  async deleteTransaction(id: string): Promise<void> {
    await deleteDoc(doc(db, 'financial_transactions', id));
  }

  subscribeToTransactions(callback: (transactions: FinancialTransaction[]) => void): () => void {
    const q = query(this.collection, orderBy('createdAt', 'desc'));
    return onSnapshot(q, (snapshot) => {
      const transactions = snapshot.docs.map(doc => {
          const data = doc.data();
          return { ...data, id: doc.id } as FinancialTransaction;
      });
      callback(transactions);
    });
  }
}

export const financeService = new FinanceService();
