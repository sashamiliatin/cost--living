// Require mongoose
const mongoose = require('mongoose')

// Define Schema
const Schema = mongoose.Schema
const userExpenses = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true
    },
    month:{
        type: Number,required: true, max:12
    },
    year:{
        type: Number,required: true
    },
    category: {
        type: String,
        enum: ['Home', 'Transportation','Entertainment','Food','Health','Sport','Private','Education'],
        required: true
    },
    sum:{type: Number,default:0},
    expenses:{
        type: [{
            name: { type: String, required: true, max: 100 },
            amount: { type: Number, required: true },
            date: {type: Date,required:true},
            category: {
                type: String,
                enum: ['Home', 'Transportation','Entertainment','Food','Health','Sport','Private','Education'],
                required: true
            },
        }]
    }
})
module.exports = mongoose.model('userExpenses', userExpenses)
