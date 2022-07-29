const { Schema , model } = require('mongoose');

const wordSchema = new Schema({

    word:{
    
        type:String,
        maxLength:6,
        minLength:6,
        lowercase:true,
        trim:true,
    
    }

})

module.exports = model('Word',wordSchema)