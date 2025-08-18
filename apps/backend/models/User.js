const mongoose = require('mongoose').set("strictQuery", true)
const dbUrl = process.env.MONGODBURL
mongoose.connect(dbUrl)
    .then((result) => {
        console.log(`User.js Data base has been connected, URL: ${dbUrl}`)
    }).catch((error) => {
    console.log(error)
})
const userSchema = new mongoose.Schema({
    uuid: String,
    username: String,
    name: String,
    passwordHash: String,
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Todo"
        }
    ],
});
userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.id
        // the passwordHash should not be revealed
        delete returnedObject.passwordHash;
    }
});
// const User = mongoose.model("UserDB", userSchema);
// module.exports = User;
module.exports = mongoose.model("UserDB", userSchema);