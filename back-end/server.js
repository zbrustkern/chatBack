const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const testJWTRouter = require('./controllers/test-jwt')
const usersRouter = require('./controllers/users')
const profilesRouter = require('./controllers/profiles')
const path = require('path')


mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(path.dirname(__dirname), 'front-end', 'dist')))

// Routes go here
app.use('/api/test-jwt', testJWTRouter)
app.use('/api/users', usersRouter)
app.use('/api/profiles', profilesRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'front-end', 'dist', 'index.html'))
})

app.listen(process.env.PORT, () => {
    console.log('The express app is ready!')
})