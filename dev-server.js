const http = require('http')
const handler = require('./api/guestbook')

const PORT = process.env.GUESTBOOK_PORT || 3001

const server = http.createServer((req, res) => {
  // Delegate to the same handler used by Vercel functions
  try {
    handler(req, res)
  } catch (err) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Internal server error' }))
  }
})

server.listen(PORT, () => {
  console.log(`Guestbook dev API listening: http://localhost:${PORT}/api/guestbook`)
})
