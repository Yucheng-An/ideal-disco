const mongoose = require('mongoose').set("strictQuery", true)
const dbUrl = process.env.MONGODBURL
mongoose.connect(dbUrl)
    .then((result) => {
        console.log(`Data base has been connected, URL: ${dbUrl}`)
    }).catch((error) => {
    console.log(error)
})

module.exports = dbUrl;