import { PayOS } from '@payos/node';

const p = new PayOS({ clientId: 'a', apiKey: 'b', checksumKey: 'c' });
const wData = {
  webhookUrl: "abc"
};

try {
  const result = p.webhooks.verify(wData);
  if (result instanceof Promise) {
    result.catch(e => console.log("Promise catch error:", e.name, e.message));
  }
} catch (e) {
  console.log("Sync error:", e.name, e.message);
}
