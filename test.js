import { PayOS } from '@payos/node';
try {
  const p = new PayOS({ clientId: 'a', apiKey: 'b', checksumKey: 'c' });
  console.log("Khởi tạo PayOS thành công v2:", typeof p.paymentRequests.create === 'function');
} catch(e) {
  console.error("Lỗi:", e);
}
