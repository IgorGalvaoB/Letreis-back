require('dotenv').config()
const express = require('express');
const app = express();
const client = require('./config/redis.config.js')
const time = require('./alterador.js')



/*
const c = (word)=>{
    let counter = 0;
    let currentDate = Date.now()
    setInterval(() => {
        counter++
        const date = Date.now()
        const timeLapse = Math.floor((date-currentDate)/1000)
        //console.log(timeLapse)
        if(timeLapse){
            const changing = (wordToChange)=>{
                const temp = words[Math.round(Math.random()*2)]
                if(wordToChange!==temp){
                    return temp       
                }
                return changing(wordToChange)
            }
            word = changing(word)
            currentDate = Date.now()
        }
        
    }, 500);
    return word

}*/
