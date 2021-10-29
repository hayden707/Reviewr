const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
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

app.use('/api/auth', AuthRouter)
app.use('/api/reviews', ReviewRouter)
app.use('/api/users', UserRouter)
app.use('/api/albums', AlbumRouter)

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')))
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/client/build/index.html`))
//   })
// }

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
