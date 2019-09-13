const express = require('express')
const platziBadges = express()
const path = require('path')
const PORT = process.env.PORT || 5000

platziBadges
  .use(express.static(path.join(__dirname, '..', 'dist')))
  .set('dist', path.join(__dirname, '..', 'dist'))
  .get('/', (req, res) => res.sendFile('dist', 'index.html'))
  .get('/*', (req, res) => res.sendFile(path.join(__dirname, '..', 'dist', 'index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

console.log('server intialized.')