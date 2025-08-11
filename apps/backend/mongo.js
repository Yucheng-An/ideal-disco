const mongoose = require('mongoose').set("strictQuery",true)

const url = "mongodb://localhost:27017/ideal-disco"
const todoSchema = new mongoose.Schema({
    uuid:String,
    content:String,
    id: Number,
    createDate:String,
    lastModify:String,
    finish:Boolean,
    category:[String],
    userId:Number
})

const Todo = mongoose.model('Todolist',todoSchema)

console.log("Starting connecting the MongoDB")
mongoose
    .connect(url)
    .then((result) => {
        console.log(`Data base has been connected, url:${url}`)
    }).catch((error) =>{
    console.log(error)
})
