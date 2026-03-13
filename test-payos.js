import { PayOS } from '@payos/node';
try {
  const p = new PayOS('client-id', 'api-key', 'checksum');
  console.log("paymentRequests.create?", typeof p.paymentRequests.create);
} catch(e) {
  console.error("Lỗi khởi tạo PayOS:", e);
}
