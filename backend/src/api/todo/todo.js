const restful = require('node-restful');
const mongoose = restful.mongoose;

//esquema do banco
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

//exportando o esquema com o nome de Todo
module.exports = restful.model('Todo', todoSchema);