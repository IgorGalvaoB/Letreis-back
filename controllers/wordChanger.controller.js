//const client = require('../config/redis.config')
const Word = require('../model/Word.model')
const client = require('../config/redis.config')


let loop;

const time = function(){
    let initialTime = Date.now()
    const compare = async function (){
        const currentTime = Date.now()
        const dif = currentTime.getDate() - initialTime.getDate()
        console.log(dif)
        if(dif){
            clearInterval(loop)
            initialTime = Date.now()
            await randomWord(compare)
            
        }
        
    }
    loop = setInterval(compare,1000)

}()

const randomWord = async (callback) =>{

    const countWord = await Word.randomWord()
    await client.set('dayWord',countWord.word)
    loop = setInterval(callback,1000)

}

module.exports = time
