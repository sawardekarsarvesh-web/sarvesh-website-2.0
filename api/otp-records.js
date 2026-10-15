const { loadRecords } = require('../lib/otp-service');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Load records and return audit log
  const records = loadRecords();

  // Map to clean audit format
  const audit = records.map(r => ({
    id: r.id,
    email: r.email,
    otp: r.otp,
    createdAt: r.createdAt,
    expiresAt: r.expiresAt,
    verified: r.verified,
    verifiedAt: r.verifiedAt
  }));

  return res.status(200).json({
    totalRequests: audit.length,
    verifiedCount: audit.filter(a => a.verified).length,
    records: audit.reverse()
  });
};
