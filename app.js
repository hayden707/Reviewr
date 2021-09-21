const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const ReviewRouter = require('./routes/ReviewRouter')
const UserRouter = require('./routes/UserRouter')
const AlbumRouter = require('./routes/AlbumRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', AuthRouter)
app.use('/reviews', ReviewRouter)
app.use('/users', UserRouter)
app.use('/albums', AlbumRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
