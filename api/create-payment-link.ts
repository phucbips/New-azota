import { VercelRequest, VercelResponse } from '@vercel/node';
import { PayOS } from '@payos/node';

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

    // Read directly from Environment Variables to prevent DB timeout/crash on Vercel
    const clientId = process.env.PAYOS_CLIENT_ID || '';
    const apiKey = process.env.PAYOS_API_KEY || '';
    const checksumKey = process.env.PAYOS_CHECKSUM_KEY || '';

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

    const parsedOrderCode = Number(orderCode);
    if (isNaN(parsedOrderCode)) {
      return res.status(400).json({
        error: 'Invalid Order Code format',
        message: 'Đơn hàng cũ có chứa chữ cái (VD: EDU-...) không được hỗ trợ thanh toán tự động qua cổng PayOS. Vui lòng tạo đơn hàng mới hoặc chuyển khoản thủ công.'
      });
    }

    const body = {
      orderCode: parsedOrderCode,
      amount: Number(amount),
      description: String(description).substring(0, 25), // PayOS limit is 25 chars
      returnUrl,
      cancelUrl,
    };

    let checkoutUrl = '';
    let paymentLinkId = '';

    try {
        const paymentLinkResponse = await payOS.paymentRequests.create(body);
        checkoutUrl = paymentLinkResponse.checkoutUrl;
        paymentLinkId = paymentLinkResponse.paymentLinkId;
    } catch (e: any) {
        // If order already exists (HTTP 200 / Code 231), retrieve it
        if (e.message && e.message.includes('231')) {
            const existingPayment = await payOS.paymentRequests.getPaymentLinkInformation(body.orderCode);
            if (existingPayment && existingPayment.status !== 'PAID') {
                 // PayOS doesn't directly return checkoutUrl on get.
                 // The checkout URL format is usually fixed: https://pay.payos.vn/web/{paymentLinkId}
                 checkoutUrl = `https://pay.payos.vn/web/${existingPayment.id}`;
                 paymentLinkId = existingPayment.id;
            } else {
                 return res.status(400).json({ error: 'Đơn hàng này đã được thanh toán hoặc không hợp lệ.' });
            }
        } else {
            throw e;
        }
    }

    return res.status(200).json({
      checkoutUrl,
      paymentLinkId,
    });
  } catch (error: any) {
    console.error('PayOS Error:', error);
    return res.status(500).json({
      error: 'Failed to create payment link',
      message: error.message || String(error)
    });
  }
}
