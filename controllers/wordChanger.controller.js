//const client = require('../config/redis.config')
const Word = require('../model/Word.model')
const client = require('../config/redis.config')


let loop;

const time = function(){
    let initialTime = new Date()
    const compare = async function (){
        const currentTime = new Date()
        const dif = currentTime.getMinutes() - initialTime.getMinutes()
        if(dif){
            clearInterval(loop)
            initialTime = new Date()
            await randomWord(compare)
            
            
        }
        
    }
    loop = setInterval(compare,1000)
}()

const randomWord = async (callback) =>{

    const countWord = await Word.randomWord()
    await client.set('dayWord',countWord.word)
    console.log(countWord)
    loop = setInterval(callback,1000)

}

module.exports = time