const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    content: String,
    createDate: String,
    lastModify: String,
    finished: Boolean,
    category: [],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

todoSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
module.exports = mongoose.model("Todo", todoSchema);
