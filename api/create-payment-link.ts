import { VercelRequest, VercelResponse } from '@vercel/node';
import { PayOS } from '@payos/node';
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    try {
        let credential;
        if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
            const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
            credential = admin.credential.cert(serviceAccount);
        } else {
            credential = admin.credential.applicationDefault();
        }
        admin.initializeApp({ credential });
    } catch (e) {
        console.error('Firebase Admin init error in create-payment-link', e);
    }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { amount, description, orderCode, returnUrl, cancelUrl } = req.body;

    if (!amount || !description || !orderCode || !returnUrl || !cancelUrl) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Fetch PayOS configuration from Firebase Firestore (Admin Settings)
    let payosClientId = process.env.PAYOS_CLIENT_ID || '';
    let payosApiKey = process.env.PAYOS_API_KEY || '';
    let payosChecksumKey = process.env.PAYOS_CHECKSUM_KEY || '';

    try {
        const db = admin.firestore();
        const settingsSnap = await db.collection('app_settings').doc('general').get();
        if (settingsSnap.exists) {
            const settingsData = settingsSnap.data();
            if (settingsData?.integrations) {
                payosClientId = settingsData.integrations.payosClientId || payosClientId;
                payosApiKey = settingsData.integrations.payosApiKey || payosApiKey;
                payosChecksumKey = settingsData.integrations.payosChecksumKey || payosChecksumKey;
            }
        }
    } catch (dbError) {
        console.warn('Could not fetch app_settings from Firestore, falling back to process.env', dbError);
    }

    if (!payosClientId || !payosApiKey || !payosChecksumKey) {
        throw new Error('PayOS credentials are not fully configured in Admin Settings.');
    }

    const payOS = new PayOS({
      clientId: payosClientId,
      apiKey: payosApiKey,
      checksumKey: payosChecksumKey
    });

    const body = {
      orderCode: Number(orderCode),
      amount: Number(amount),
      description: String(description).substring(0, 25), // PayOS limit is 25 chars
      returnUrl,
      cancelUrl,
    };

    const paymentLinkResponse = await payOS.paymentRequests.create(body);

    return res.status(200).json({
      checkoutUrl: paymentLinkResponse.checkoutUrl,
      paymentLinkId: paymentLinkResponse.paymentLinkId,
    });
  } catch (error: any) {
    console.error('PayOS Error:', error);
    // Ensure we always return a valid JSON object, even if PayOS throws an unexpected type of error
    return res.status(500).json({
      error: 'Failed to create payment link',
      message: typeof error === 'string' ? error : (error.message || 'Lỗi hệ thống hoặc Cổng thanh toán chưa kích hoạt')
    });
  }
}
