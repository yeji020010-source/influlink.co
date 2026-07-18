exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.DEEPL_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'DEEPL_API_KEY not configured' }) };
  }

  let text, targetLang;
  try {
    const body = JSON.parse(event.body);
    text = body.text;
    targetLang = body.targetLang;
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  if (!text || !targetLang) {
    return { statusCode: 400, body: JSON.stringify({ error: 'text and targetLang are required' }) };
  }

  const apiHost = apiKey.endsWith(':fx') ? 'api-free.deepl.com' : 'api.deepl.com';

  try {
    const res = await fetch(`https://${apiHost}/v2/translate`, {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: [text],
        target_lang: targetLang
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      return { statusCode: res.status, body: JSON.stringify({ error: 'DeepL API error', detail: errText }) };
    }

    const data = await res.json();
    const translation = data.translations && data.translations[0];

    return {
      statusCode: 200,
      body: JSON.stringify({
        translatedText: translation ? translation.text : '',
        detectedSourceLang: translation ? translation.detected_source_language : null
      })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Translation request failed', detail: err.message }) };
  }
};
