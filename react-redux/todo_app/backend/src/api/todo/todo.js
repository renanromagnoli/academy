const mongoose = require('mongoose')
const restful = require('node-restful')
const mogoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: { type: Boolean, required: true, default: false},
    createdAt: {type:Date, default: Date.now}
})

module.exports = restful.model('Todo', todoSchema)