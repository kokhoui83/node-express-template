import express from 'express'
import bodyParser from 'body-parser'

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let port = process.env.PORT || 3000

import proxy from './routes/proxy'
app.use('/proxy', proxy)

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
