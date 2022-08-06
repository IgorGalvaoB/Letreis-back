const client = require('../config/redis.config')

const wordChecked = async (word) => {

    const wordArr = word.split('')

    const dayWord = await client.get('dayWord').then(res => res.split(''));

    const exactMatch = (str, strToMatch) => {

        for (i = 0; i < 6; i++) {
            const match = !str[i].localeCompare(strToMatch[i], 'pt-BR', { sensitivity: 'base' })
            if (match) {
                str[i] = [str[i], 2]
                strToMatch[i] = [strToMatch[i], 'matched']

            } else {
                str[i] = [str[i], 0]
                strToMatch[i] = [strToMatch[i],'notMatched'] 

            }
        }
    }
    const halfMatch = (str, strToMatch) => {

        for (i = 0; i < 6; i++) {
            if (str[i][1] === 2) {
                continue
            }
            for (j = 0; j < strToMatch.length; j++) {
                const matchedBefore = strToMatch[j][1] === 'matched'
                
                const match = !str[i][0].localeCompare(strToMatch[j][0], 'pt-BR', { sensitivity: 'base' })
                
                if (matchedBefore) {
                    continue
                }


                if(match){
                    str[i][1] = 1
                    strToMatch.splice(j,1)
                }

            }
        }


    }



    exactMatch(wordArr, dayWord)

    halfMatch(wordArr, dayWord)


    return wordArr


}
module.exports = wordChecked
