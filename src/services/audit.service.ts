import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp, orderBy, query, limit, onSnapshot, Timestamp } from 'firebase/firestore';

export interface AuditLog {
  id?: string;
  action: string; // e.g., 'create_user', 'delete_assignment'
  target: string; // e.g., 'user:123', 'assignment:456'
  performedBy: string; // uid of admin
  performedByEmail: string;
  details?: any;
  createdAt: Timestamp;
}

const COLLECTION = 'audit_logs';

class AuditService {

  async logAction(action: string, target: string, performedBy: string, performedByEmail: string, details?: any) {
    try {
      await addDoc(collection(db, COLLECTION), {
        action,
        target,
        performedBy,
        performedByEmail,
        details: details || {},
        createdAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Failed to log audit action:", error);
    }
  }

  subscribeToLogs(callback: (logs: AuditLog[]) => void, limitCount = 50) {
    const q = query(
      collection(db, COLLECTION),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );

    return onSnapshot(q, (snapshot) => {
      const logs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AuditLog));
      callback(logs);
    });
  }
}

export const auditService = new AuditService();
