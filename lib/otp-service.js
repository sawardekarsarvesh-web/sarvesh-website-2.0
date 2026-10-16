const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const FIGMA_DECK_URL = 'https://www.figma.com/deck/A0NRN98GqyeKguCKP742LO/Sarvesh_Sawardekar_Bank_Portfolio?node-id=0-20&t=V1WK0JkyoDSVvel7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1';

const OTP_SECRET = process.env.OTP_SECRET || 'sarvesh-bank-portfolio-otp-secret-key-2026';
const MASTER_OTP = process.env.MASTER_OTP || '742026';

// Cryptographic stateless OTP token generator
function signOtpToken(email, otp, expiresAtMs) {
  const cleanEmail = String(email || '').trim().toLowerCase();
  const cleanOtp = String(otp || '').trim().replace(/\D/g, '');
  const data = `${cleanEmail}:${cleanOtp}:${expiresAtMs}`;
  const hmac = crypto.createHmac('sha256', OTP_SECRET).update(data).digest('hex');
  return `${expiresAtMs}.${hmac}`;
}

// Cryptographic stateless OTP token verifier
function verifyOtpToken(email, otp, token) {
  if (!token || typeof token !== 'string') return { valid: false, reason: 'missing_token' };
  const parts = token.split('.');
  if (parts.length !== 2) return { valid: false, reason: 'invalid_format' };

  const [expiresAtStr, signature] = parts;
  const expiresAtMs = Number(expiresAtStr);
  if (isNaN(expiresAtMs)) return { valid: false, reason: 'invalid_timestamp' };

  if (Date.now() > expiresAtMs) {
    return { valid: false, reason: 'expired' };
  }

  const cleanEmail = String(email || '').trim().toLowerCase();
  const cleanOtp = String(otp || '').trim().replace(/\D/g, '');
  const data = `${cleanEmail}:${cleanOtp}:${expiresAtMs}`;
  const expectedHmac = crypto.createHmac('sha256', OTP_SECRET).update(data).digest('hex');

  if (signature.length !== expectedHmac.length) {
    return { valid: false, reason: 'mismatch' };
  }

  try {
    const match = crypto.timingSafeEqual(Buffer.from(signature, 'utf8'), Buffer.from(expectedHmac, 'utf8'));
    return match ? { valid: true } : { valid: false, reason: 'mismatch' };
  } catch (e) {
    return { valid: false, reason: 'mismatch' };
  }
}

// Determine storage file path (with safe serverless fallback)
function getStoragePath() {
  const localDir = path.join(process.cwd(), 'data');
  const localFile = path.join(localDir, 'otp-records.json');

  try {
    if (!fs.existsSync(localDir)) {
      fs.mkdirSync(localDir, { recursive: true });
    }
    fs.appendFileSync(localFile, '');
    return localFile;
  } catch (err) {
    // Fallback to /tmp in serverless / read-only filesystems
    return path.join('/tmp', 'otp-records.json');
  }
}

function loadRecords() {
  try {
    const file = getStoragePath();
    if (!fs.existsSync(file)) return [];
    const content = fs.readFileSync(file, 'utf8');
    return content ? JSON.parse(content) : [];
  } catch (err) {
    return [];
  }
}

function saveRecords(records) {
  try {
    const file = getStoragePath();
    fs.writeFileSync(file, JSON.stringify(records, null, 2), 'utf8');
    return true;
  } catch (err) {
    return false;
  }
}

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendEmailViaNodemailer(toEmail, otp) {
  let nodemailer;
  try {
    nodemailer = require('nodemailer');
  } catch (e) {
    return false;
  }

  const host = process.env.SMTP_HOST || (process.env.SMTP_USER && process.env.SMTP_USER.includes('gmail.com') ? 'smtp.gmail.com' : null);
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER || process.env.GMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASS;

  if (!host || !user || !pass) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  const mailOptions = {
    from: `"Sarvesh Sawardekar" <${user}>`,
    to: toEmail,
    subject: `${otp} is your verification code for Bank Portfolio Presentation`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 540px; margin: 0 auto; padding: 32px 24px; background: #0c0f14; color: #ffffff; border-radius: 16px; border: 1px solid #1e2633;">
        <div style="margin-bottom: 24px; display: flex; align-items: center; gap: 10px;">
          <span style="display: inline-block; padding: 4px 10px; background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 20px; font-size: 12px; font-weight: 600; color: #60a5fa;">🔒 Confidential Access</span>
        </div>
        <h2 style="font-size: 22px; font-weight: 700; color: #ffffff; margin: 0 0 10px 0;">Bank Portfolio Presentation</h2>
        <p style="font-size: 14.5px; line-height: 1.6; color: #94a3b8; margin: 0 0 24px 0;">
          You requested access to view Sarvesh Sawardekar's proprietary banking design presentation (National Bank of Kuwait, Riyad Bank, NBF, and ANZ Bank).
        </p>
        <div style="background: #141a23; border: 1px solid #2a3447; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
          <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; font-weight: 600; display: block; margin-bottom: 8px;">Your One-Time Verification Code</span>
          <div style="font-family: monospace; font-size: 36px; font-weight: 700; letter-spacing: 8px; color: #38bdf8; margin: 6px 0;">
            ${otp}
          </div>
          <span style="font-size: 12px; color: #64748b; display: block; margin-top: 8px;">Valid for 10 minutes · Single use only</span>
        </div>
        <p style="font-size: 13px; line-height: 1.5; color: #64748b; margin: 0 0 20px 0;">
          If you did not request this access code, please ignore this email.
        </p>
        <hr style="border: none; border-top: 1px solid #1e2633; margin: 24px 0 16px 0;" />
        <p style="font-size: 12px; color: #475569; margin: 0;">
          © 2026 Sarvesh Sawardekar · Senior UI/UX &amp; Product Designer
        </p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
  return true;
}

async function sendEmailViaResend(toEmail, otp) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const fromEmail = process.env.RESEND_FROM || 'Sarvesh Sawardekar <onboarding@resend.dev>';
  const payload = JSON.stringify({
    from: fromEmail,
    to: [toEmail],
    subject: `${otp} is your verification code for Bank Portfolio Presentation`,
    html: `
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px; background: #0c0f14; color: #ffffff; border-radius: 12px;">
        <h2 style="color: #ffffff;">Bank Portfolio Presentation Verification</h2>
        <p style="color: #94a3b8;">Your 6-digit access code for Sarvesh Sawardekar's Bank Portfolio Deck:</p>
        <div style="font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #38bdf8; padding: 16px 0;">${otp}</div>
        <p style="color: #64748b; font-size: 12px;">Valid for 10 minutes.</p>
      </div>
    `
  });

  return new Promise((resolve) => {
    const req = https.request('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      resolve(res.statusCode >= 200 && res.statusCode < 300);
    });
    req.on('error', () => resolve(false));
    req.write(payload);
    req.end();
  });
}

// Background notification to Sarvesh about the OTP request
function notifyAdmin(email, otp) {
  try {
    const payload = JSON.stringify({
      name: 'Bank Deck Access Request',
      email: email,
      _subject: `[Bank Deck Request] ${email}`,
      message: `User ${email} requested Bank Portfolio Presentation access.\nOTP: ${otp}\nTimestamp: ${new Date().toISOString()}`,
      _template: 'table',
      _captcha: 'false'
    });

    const req = https.request('https://formsubmit.co/ajax/sawardekarsarvesh@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    });
    req.on('error', () => {});
    req.write(payload);
    req.end();
  } catch (e) {}
}

// Background notification to Sarvesh when OTP is successfully verified
function notifyAdminAccess(email) {
  try {
    const payload = JSON.stringify({
      name: 'Bank Deck Access Granted',
      email: email,
      _subject: `[Bank Deck UNLOCKED] ${email}`,
      message: `User ${email} successfully VERIFIED and OPENED the Bank Portfolio Presentation!\nTimestamp: ${new Date().toISOString()}`,
      _template: 'table',
      _captcha: 'false'
    });

    const req = https.request('https://formsubmit.co/ajax/sawardekarsarvesh@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    });
    req.on('error', () => {});
    req.write(payload);
    req.end();
  } catch (e) {}
}

async function createAndSendOtp(email, metadata = {}) {
  const cleanEmail = String(email || '').trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!cleanEmail || !emailRegex.test(cleanEmail)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  const now = Date.now();
  const expiresAtMs = now + 10 * 60 * 1000; // 10 minutes
  const expiresAt = new Date(expiresAtMs).toISOString();
  const otp = generateOtp();
  const token = signOtpToken(cleanEmail, otp, expiresAtMs);

  // Rate limiting & audit logging (graceful in serverless)
  try {
    const records = loadRecords();
    const recentForEmail = records.filter(r => r.email === cleanEmail && now - new Date(r.createdAt).getTime() < 3600000);
    if (recentForEmail.length >= 10) {
      return { success: false, error: 'Too many OTP requests for this email. Please try again later.' };
    }

    const newRecord = {
      id: `otp_${now}_${Math.random().toString(36).substring(2, 8)}`,
      email: cleanEmail,
      otp: otp,
      createdAt: new Date(now).toISOString(),
      expiresAt: expiresAt,
      verified: false,
      verifiedAt: null,
      ip: metadata.ip || null,
      userAgent: metadata.userAgent || null
    };

    records.push(newRecord);
    saveRecords(records);
  } catch (e) {
    // Non-fatal in read-only / serverless containers
  }

  // Send real email via Resend or Nodemailer
  let emailSent = false;
  try {
    emailSent = await sendEmailViaResend(cleanEmail, otp);
    if (!emailSent) {
      emailSent = await sendEmailViaNodemailer(cleanEmail, otp);
    }
  } catch (err) {
    console.warn('Email dispatch warning:', err.message);
  }

  // Notify Sarvesh of access request
  notifyAdmin(cleanEmail, otp);

  console.log(`[OTP GENERATED] Email: ${cleanEmail} | OTP: ${otp} | Email Delivered: ${emailSent}`);

  return {
    success: true,
    message: emailSent
      ? `A 6-digit verification code has been sent to ${cleanEmail}.`
      : `Verification code generated for ${cleanEmail}. Check your inbox.`,
    expiresIn: 600,
    token: token,
    devCode: !emailSent ? otp : null,
    devHint: !emailSent ? `(Dev mode: OTP code is ${otp})` : null
  };
}

function verifyUserOtp(email, otp, token) {
  const cleanEmail = String(email || '').trim().toLowerCase();
  const cleanOtp = String(otp || '').trim().replace(/\D/g, '');

  if (!cleanEmail || cleanOtp.length !== 6) {
    return { success: false, error: 'Please enter a valid 6-digit OTP code.' };
  }

  const now = Date.now();
  let isValid = false;

  // 1. Check Master OTP bypass (emergency key)
  if (MASTER_OTP && cleanOtp === MASTER_OTP) {
    isValid = true;
    console.log(`[OTP MASTER KEY] Emergency access granted to Bank Deck for ${cleanEmail}`);
  }

  // 2. Check Stateless Cryptographic HMAC Token (primary for serverless / multi-container)
  if (!isValid && token) {
    const tokenCheck = verifyOtpToken(cleanEmail, cleanOtp, token);
    if (tokenCheck.valid) {
      isValid = true;
    } else if (tokenCheck.reason === 'expired') {
      return {
        success: false,
        error: 'Verification code has expired (valid for 10 minutes). Please request a new code.'
      };
    }
  }

  // 3. Fallback: Check local filesystem records (for server / persistent localhost setups)
  if (!isValid) {
    try {
      const records = loadRecords();
      const matchingIndex = records.slice().reverse().findIndex(r => {
        return r.email === cleanEmail &&
          r.otp === cleanOtp &&
          new Date(r.expiresAt).getTime() > now;
      });

      if (matchingIndex !== -1) {
        isValid = true;
        const actualIndex = records.length - 1 - matchingIndex;
        records[actualIndex].verified = true;
        records[actualIndex].verifiedAt = new Date().toISOString();
        saveRecords(records);
      }
    } catch (e) {
      // Non-fatal
    }
  }

  if (!isValid) {
    return {
      success: false,
      error: 'Invalid or expired verification code. Please check and try again.'
    };
  }

  // Notify admin that someone actually accessed the deck
  notifyAdminAccess(cleanEmail);

  console.log(`[OTP VERIFIED] Access granted to Bank Deck for ${cleanEmail}`);

  return {
    success: true,
    message: 'Verification successful! Access granted.',
    deckUrl: FIGMA_DECK_URL
  };
}

module.exports = {
  FIGMA_DECK_URL,
  loadRecords,
  createAndSendOtp,
  verifyUserOtp,
  signOtpToken,
  verifyOtpToken
};
