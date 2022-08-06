//const client = require('../config/redis.config')

const wordChecked = async (word) => {

    const wordArr = word.split('')
    //caçapa
    //const dayWord = await client.get('dayWord').then(res=>res.split(''));
    const dayWord = 'caçapá'
    const dayWordCopy = [...dayWord]

    const halfMatch = (str, strToMatch) => {

        for (i = 0; i < 6; i++) {
           
            
            // if(strToMatch.includes(str[i])){
            console.log(strToMatch,str[i])
            console.log((strToMatch.localeCompare(str[i], 'pt-BR', { sensitivity: 'base' }) !== -1) )
            if (strToMatch.localeCompare(str[i])!== -1) {
                
                //const index = strToMatch.indexOf(str[i]) 
                const index = strToMatch.localeCompare(str[i])
                console.log(index)
                str[i] = [str[i], 1]
                strToMatch=strToMatch.split('')
                strToMatch.splice(index,1)
                strToMatch=strToMatch.join('')
                console.log(strToMatch)
            } else {

                str[i] = [str[i], 0]

            }
        }
        console.log(str)
        
    }

    const exactMatch = (str, strToMatch) => {

        for (i = 0; i < 6; i++) {

            if (str[i][0] === strToMatch[i]) {

                str[i][1] = 2

            }

        }

    }


    halfMatch(wordArr, dayWord)
    exactMatch(wordArr, dayWordCopy)

    return wordArr

}
/*module.exports=*/wordChecked('cacapa')
