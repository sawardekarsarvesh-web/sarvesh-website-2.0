const { createAndSendOtp } = require('../lib/otp-service');

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed. Use POST.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) {}
    }
    body = body || {};

    const email = body.email;
    const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress;
    const userAgent = req.headers['user-agent'];

    const result = await createAndSendOtp(email, { ip, userAgent });

    if (!result.success) {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  } catch (err) {
    console.error('API send-otp error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error processing OTP.' });
  }
};
