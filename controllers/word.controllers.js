const client = require('../config/redis.config')



const wordChecked = async (word)=>{

    const wordArr = word.split('')

    const dayWord = await client.get('dayWord').then(res=>res.split(''));
    
    const dayWordCopy = [...dayWord]

    const halfMatch = (str,strToMatch)=>{

        for(i = 0; i < 6; i++){
            if(strToMatch.includes(str[i])){
                
                const index = str.indexOf(str[i])
    
                str[i]=[str[i],1]
    
                strToMatch.splice(index,1)
    
            } else {
    
                str[i]=[str[i],0]
            
            }
        }

    }

    const exactMatch = (str,strToMatch)=>{

        for(i = 0; i < 6; i++){
            
            if (str[i][0] === strToMatch[i]) {

                str[i][1] = 2

            }

        }

    }

    halfMatch(wordArr,dayWord)

    exactMatch(wordArr,dayWordCopy)
   
    
    return wordArr


}
module.exports=wordChecked
