import { PayOS } from '@payos/node';

const p = new PayOS({ clientId: 'a', apiKey: 'b', checksumKey: 'c' });
const wData = {
  webhookUrl: "abc"
};

try {
  p.webhooks.verify(wData).catch(e => console.log("Catch error:", e.name, e.message));
} catch (e) {
  console.log("Sync error:", e.name, e.message);
}
