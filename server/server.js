const express = require('express')
const app = express()
const port = 5000
const fetch = require('node-fetch')
require('dotenv').config()

const url = process.env.EXPRESS_URL

app.use(express.static('client'))

app.get('/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  fetch(`${url}${req.params.id}`)
    .then(data => data.json())
    .then(data => {
      res.json({
        name: data.name,
        username: data.login,
        avatar: data.avatar_url,
        followers: data.followers,
        following: data.following,
        repos: data.public_repos
      })
    })
})

app.listen(port, () => console.log('Server listening on port ' + port))
