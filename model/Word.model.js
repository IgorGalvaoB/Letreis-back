const { Schema, model } = require('mongoose');

const wordSchema = new Schema({

    word: {

        type: String,
        maxLength: 6,
        minLength: 6,
        lowercase: true,
        trim: true,

    }
},
    {
        statics: {
            async randomWord() {
                const count = await this.count()
                const rand = Math.floor(Math.random() * count);
                const word = await this.findOne().skip(rand)
                console.log(word,rand,count)
                return word
            }
        }
    }
)


/*wordSchema.statics.randomWord = async ()=>{*/

module.exports = model('Word', wordSchema)