const { Router } = require('express')
const router = Router()
const wordChecker = require('../controllers/word.controllers')
const client = require('../config/redis.config')

router.get('/:word',async(req,res)=>{

    const {word} = req.params

    try {

        const wordChecked = await wordChecker(word)
        
        res.status(200).json(wordChecked)

    } catch (error) {
        
        res.status(400).json({error:error.message})

    }

})

router.get('/insert/:word',async ( req , res )=>{

    const { word } = req.params
    
    try {
        
        await client.set('dayWord',word)
        res.status(200).json({deu:'certo'})

    } catch (error) {

        res.status(error.status||400).json(error)

    }

})
module.exports = router
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