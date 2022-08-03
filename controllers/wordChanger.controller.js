//const client = require('../config/redis.config')

const wordChanger = ()=>{
    let date = null
     word = 'aa'
    const timeChecker = setInterval(()=>{
    
        if(!date) date = new Date('august 03,2022 23:10 GMT-3:00') 
        const date2 = Date.now()
        const dif = Math.floor((date2 - date)/1000/60)
        
        if (dif) {
            this.clearInterval()
            
        }
        console.log(word)
    },1000)
}
wordChanger()