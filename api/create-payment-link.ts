import { VercelRequest, VercelResponse } from '@vercel/node';
import { PayOS } from '@payos/node';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin if not already initialized
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
        console.error('Firebase Admin init error', e);
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

    // Attempt to read PayOS keys from Firestore Database (Admin UI settings)
    let clientId = process.env.PAYOS_CLIENT_ID || '';
    let apiKey = process.env.PAYOS_API_KEY || '';
    let checksumKey = process.env.PAYOS_CHECKSUM_KEY || '';

    if (admin.apps.length) {
        try {
            const db = admin.firestore();
            const settingsDoc = await db.collection('app_settings').doc('general').get();
            if (settingsDoc.exists) {
                const data = settingsDoc.data();
                if (data?.integrations) {
                    if (data.integrations.payosClientId) clientId = data.integrations.payosClientId;
                    if (data.integrations.payosApiKey) apiKey = data.integrations.payosApiKey;
                    if (data.integrations.payosChecksumKey) checksumKey = data.integrations.payosChecksumKey;
                }
            }
        } catch (dbErr) {
            console.warn('Could not read PayOS keys from database, falling back to process.env', dbErr);
        }
    }

    if (!clientId || !apiKey || !checksumKey) {
        return res.status(500).json({
            error: 'Missing PayOS Configuration',
            message: 'Client ID, API Key, or Checksum Key is not configured. Please check Admin Settings or Environment Variables.'
        });
    }

    const payOS = new PayOS({
      clientId,
      apiKey,
      checksumKey
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
    return res.status(500).json({
      error: 'Failed to create payment link',
      message: error.message || String(error)
    });
  }
}
