const fs = require('fs')
const path = require('path')
const os = require('os')

// Use OS tmpdir on serverless platforms (writable). For local dev, also write a guestbook.json
const tmpFile = path.join(os.tmpdir(), 'guestbook.json')
const localFile = path.join(process.cwd(), 'guestbook.json')

function readJSON(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8')
      return JSON.parse(raw || '[]')
    }
  } catch (err) {
    // ignore
  }
  return []
}

function writeJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
    return true
  } catch (err) {
    return false
  }
}

module.exports = async (req, res) => {
  // Basic CORS so the page can be hosted on same origin
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    return res.end()
  }

  if (req.method === 'GET') {
    // read from tmp (server) or local during dev
    const entries = readJSON(tmpFile).concat(readJSON(localFile))
    // dedupe by id if local file and tmp both used
    const map = new Map()
    for (const e of entries) map.set(e.id, e)
    const out = Array.from(map.values()).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify(out))
  }

  if (req.method === 'POST') {
    let body = ''
    await new Promise((resolve) => {
      req.on('data', (chunk) => (body += chunk))
      req.on('end', resolve)
    })

    let payload
    try {
      payload = JSON.parse(body)
    } catch (err) {
      res.statusCode = 400
      return res.end(JSON.stringify({ error: 'Invalid JSON' }))
    }

    const name = (payload.name || 'Anonymous').toString().slice(0, 200)
    const message = (payload.message || '').toString().slice(0, 2000)

    if (!message.trim()) {
      res.statusCode = 400
      return res.end(JSON.stringify({ error: 'Message is required' }))
    }

    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      name,
      message,
      createdAt: new Date().toISOString(),
    }

    // Append to tmp file (serverless) and local file for dev
    const currentTmp = readJSON(tmpFile)
    currentTmp.unshift(entry)
    writeJSON(tmpFile, currentTmp)

    // Try writing to project file during local dev (will fail on Vercel readonly filesystem)
    try {
      const currentLocal = readJSON(localFile)
      currentLocal.unshift(entry)
      writeJSON(localFile, currentLocal)
    } catch (err) {
      // ignore
    }

    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify({ success: true, entry }))
  }

  res.statusCode = 405
  res.end(JSON.stringify({ error: 'Method not allowed' }))
}
