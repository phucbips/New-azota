export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt, systemInstruction } = request.body;

  if (!prompt) {
    return response.status(400).json({ error: 'Prompt is required' });
  }

  // Support both variable names in Vercel Environment Variables
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    console.error('API Key is missing in environment variables.');
    return response.status(500).json({ error: 'Server configuration error: GEMINI_API_KEY missing' });
  }

  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const payload: any = {
    contents: [{ parts: [{ text: prompt }] }],
  };

  if (systemInstruction) {
    payload.systemInstruction = {
      parts: [{ text: systemInstruction }],
    };
  }

  try {
    const geminiResponse = await fetch(`${apiUrl}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!geminiResponse.ok) {
      const errorBody = await geminiResponse.json();
      return response.status(geminiResponse.status).json({
        error: errorBody.error?.message || 'Upstream API Error',
      });
    }

    const data = await geminiResponse.json();
    const textContent = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return response.status(200).json({
      ...data,
      content: textContent,
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return response.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
