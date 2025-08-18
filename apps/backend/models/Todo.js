const mongoose = require('mongoose').set("strictQuery", true)
const dbUrl = process.env.MONGODBURL
mongoose.connect(dbUrl)
    .then((result) => {
        console.log(`Todo.js Data base has been connected, URL: ${dbUrl}`)
    }).catch((error) => {
    console.log(error)
})

const todoSchema = new mongoose.Schema({
    uuid: String,
    content: String,
    id: Number,
    createDate: String,
    lastModify: String,
    finished: Boolean,
    category: [String],
    userId: Number
})

todoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        // returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('todolistdb', todoSchema)
