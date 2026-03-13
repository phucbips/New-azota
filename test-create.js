import { PayOS } from '@payos/node';

const p = new PayOS({ clientId: 'a', apiKey: 'b', checksumKey: 'c' });

const body = {
  orderCode: 12345,
  amount: 2000,
  description: "Test desc",
  returnUrl: "http://localhost/return",
  cancelUrl: "http://localhost/cancel"
};

try {
  const result = await p.paymentRequests.create(body);
  console.log(result);
} catch (e) {
  console.log(e.name, e.message);
}
