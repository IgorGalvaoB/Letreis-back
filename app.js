require('dotenv').config()
const express = require('express');
const app = express();
const connectMongoDb = require('./config/mongodb.config')
const wordChanger = require('./controllers/wordChanger.controller')
const client = require('./config/redis.config')

app.use('/',require('./routes/word.routes'))

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`)
})





