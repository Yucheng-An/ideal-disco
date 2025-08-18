const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  uuid: String,
  content: String,
  id: Number,
  createDate: String,
  lastModify: String,
  finished: Boolean,
  category: [String],
  userId: Number,
});

todoSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    // returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("todolistdb", todoSchema);
