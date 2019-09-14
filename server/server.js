const express = require('express')
const platziBadges = express()
const path = require('path')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

dotenv.config()
platziBadges.use(bodyParser.json())

const PORT = process.env.PORT || 5000
const uri = process.env.MONGODB_URI;

//Connecting to the Database
console.log('Opening connection to MongoDB...')
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;

//Setting Schema for data
let badgeSchema = mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  jobTitle: String,
  twitter: String,
  avatarUrl: String
})
console.log('Schema for this connection was set up.')

//Building Model
let Badge = mongoose.model('badge', badgeSchema)
console.log('Model Badge created for this connection.')

//If connection fails
db.on('error', console.error.bind(console, 'connection error:'));

//If connection is succesful
db.once('open', () => console.log('Connection to the database was succesful!'))

//Application responses
platziBadges

//Setting statics
  .use(express.static(path.join(__dirname, '..', 'dist')))

  //RESTful API

  //Obtain full badge list
  .get('/db/badges', (req, res) => {
    console.log('Incoming GET to obtain full list of badges.')
    let badgeMap = []

    Badge.find({}, (err, badges) => {

      badges.forEach((badge) => {
        badgeMap.push(badge)
      })

      return badgeMap

    }).then((result) => {
      console.log('sending JSON full list of badges at ' + new Date() + '.')

      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))

    }).catch((err) => {

      console.log('error: ' + err)
      res.send(err)

    })
  })

  //Create new Badge
  .post('/db/badges', (req, res) => {
    console.log('incoming POST to save a new badge.')
    Badge.create(req.body, (err, badge) => {
      if (err) {
        console.log(err)
        res.send(err)
      }
    })
    console.log('Badge saved succesfully! ' + new Date() + '.')
    res.end(JSON.stringify({ message: 'Badge saved succesfully!' }))
  })

  //Read a single Badge
  .get('/db/badges/:id', (req, res) => {
    console.log(`Incoming GET to obtain badge ${ req.params.id }.`)
    return Badge.find({ _id: req.params.id }, (err, badge) => {
      if (err) {
        console.log('error:', err)
        res.send(err)
      }
    }).then((result)=> {
      console.log('sending JSON info of badge', req.params.id + ' ' + new Date() + '.')
      res.end(JSON.stringify(result[0]))
    })
  })

  //Update a single Badge
  .put('/db/badges/:id', (req, res) => {
    console.log(`Incoming PUT to update badge ${ req.params.id }.`)
    Badge.updateOne({ _id: req.params.id }, req.body, (err, badge) => {
      if (err) {
        console.log('error:', err)
        res.send(err)
      }
    })
    console.log('Badge updated succesfully! '  + new Date() + '.')
    res.end(JSON.stringify({ message: 'Badge updated succesfully!' }))
  })

  //Remove a single Badge
  .delete('/db/badges/:id', (req, res) => {
    console.log(`Incoming DELETE to remove badge ${ req.params.id }.`)
    Badge.deleteOne({ _id: req.params.id }, (err, badge) => {
      if (err) {
        console.log('error:', err)
        res.send(err)
      }
    })
    console.log('Badge removed succesfully! ' + new Date() + '.')
    res.end(JSON.stringify({ message: 'Badge removed succesfully!' }))
  })

  //Basic router handler
  .get('/badges', (req, res) => {
    console.log('sending index.html at /badges ' + new Date() + '.')
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
  })

  .get('/badges/*', (req, res) => {
    console.log('sending index.html at /badges/*' + new Date() + '.')
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
  })

  //Setting port
  .listen(PORT, () => console.log(`Server initialized. Listening on ${ PORT }`))
