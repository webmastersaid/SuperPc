const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.json({ title: 'SuperPC' })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})