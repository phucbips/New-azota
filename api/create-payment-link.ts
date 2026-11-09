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
    // Read directly from Environment Variables to prevent DB timeout/crash on Vercel
    const clientId = process.env.PAYOS_CLIENT_ID || '';
    const apiKey = process.env.PAYOS_API_KEY || '';
    const checksumKey = process.env.PAYOS_CHECKSUM_KEY || '';

    if (!clientId || !apiKey || !checksumKey) {
      return res.status(500).json({
        error: 'Missing PayOS Configuration',
        message:
          'Client ID, API Key, or Checksum Key is not configured. Please check Admin Settings or Environment Variables.',
      });
    }

    const payOS = new PayOS({
      clientId,
      apiKey,
      checksumKey,
    });

    const { action, orderCode, orderCodes, amount, description, returnUrl, cancelUrl } =
      req.body || {};

    // Action 1: Check real-time payment status directly from PayOS API
    if (action === 'check-status') {
      const codesToCheck: string[] = Array.isArray(orderCodes)
        ? orderCodes.map(String)
        : orderCode
          ? [String(orderCode)]
          : [];

      const validCodes = Array.from(
        new Set(
          codesToCheck
            .map((c) => c.trim())
            .filter((c) => c && !isNaN(Number(c)) && Number(c) > 0)
        )
      );

      if (validCodes.length === 0) {
        return res.status(200).json({ anyPaid: false, results: {} });
      }

      const results: Record<string, any> = {};
      let anyPaid = false;
      let paidOrderCode: string | null = null;

      await Promise.all(
        validCodes.map(async (codeStr) => {
          try {
            const info: any = await payOS.paymentRequests.get(Number(codeStr));
            if (info) {
              const st = String(info.status || '').toUpperCase();
              const amt = Number(info.amount || 0);
              const amtPaid = Number(info.amountPaid || 0);
              const isPaid = st === 'PAID' || (amt > 0 && amtPaid >= amt);

              results[codeStr] = {
                status: st,
                amount: amt,
                amountPaid: amtPaid,
                isPaid,
              };

              if (isPaid) {
                anyPaid = true;
                paidOrderCode = codeStr;
              }
            }
          } catch (err: any) {
            // Order code might not exist on PayOS yet if QR was never created for that code
            results[codeStr] = { status: 'NOT_FOUND', isPaid: false };
          }
        })
      );

      return res.status(200).json({
        anyPaid,
        paidOrderCode,
        results,
      });
    }

    // Action 2: Create payment link (default)
    if (!amount || !description || !orderCode || !returnUrl || !cancelUrl) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const parsedOrderCode = Number(orderCode);
    if (isNaN(parsedOrderCode)) {
      return res.status(400).json({
        error: 'Invalid Order Code format',
        message:
          'Đơn hàng cũ có chứa chữ cái (VD: EDU-...) không được hỗ trợ thanh toán tự động qua cổng PayOS. Vui lòng tạo đơn hàng mới hoặc chuyển khoản thủ công.',
      });
    }

    const body = {
      orderCode: parsedOrderCode,
      amount: Number(amount),
      description: String(description).substring(0, 25), // PayOS limit is 25 chars
      returnUrl,
      cancelUrl,
    };

    const paymentLinkResponse = await payOS.paymentRequests.create(body);
    const checkoutUrl = paymentLinkResponse.checkoutUrl;
    const paymentLinkId = paymentLinkResponse.paymentLinkId;

    return res.status(200).json({
      checkoutUrl,
      paymentLinkId,
    });
  } catch (error: any) {
    console.error('PayOS Error:', error);
    return res.status(500).json({
      error: 'Failed to process PayOS request',
      message: error.message || String(error),
    });
  }
}
