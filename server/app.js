// a simple static file server
const express = require('express')
const path = require('path')
const compression = require('compression')

const app = express()
app.use(compression())
app.set('port', 10084)

// serve static assets
app.use(express.static(path.join(__dirname, '../dist')))

// Handles all routes to avoid not found error
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

const server = app.listen(app.get('port'), () => {
  const port = server.address().port
  console.log(`huoshui webapp started at ${port}`)
})
