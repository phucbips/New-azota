import { PayOS } from '@payos/node';
try {
  const p = new PayOS({ clientId: 'a', apiKey: 'b', checksumKey: 'c' });
  const wData = {
    code: "00",
    desc: "success",
    success: true,
    data: {
      orderCode: 123,
      amount: 3000,
      description: "VQRIO123",
      accountNumber: "12345678",
      reference: "TF230204212323",
      transactionDateTime: "2023-02-04 18:25:00",
      currency: "VND",
      paymentLinkId: "124c33293c43417ab7879e14c8d9eb18",
      code: "00",
      desc: "Thành công"
    },
    signature: "8d8640d802576397a1ce45ebda7f835055768ac7ad2e0bfb77f9b8f12cca4c7f"
  };
  p.webhooks.verify(wData).catch(e => console.log(e.message));
} catch(e) {
  console.error("Lỗi:", e);
}
