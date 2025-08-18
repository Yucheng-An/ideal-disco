const mongoose = require("mongoose").set("strictQuery", true);
const dbUrl = process.env.MONGODBURL;

// Only connect if not already connected
// if (mongoose.connection.readyState === 0) {
//     mongoose
//         .connect(dbUrl)
//         .then((result) => {
//             console.log(`Database has been connected, URL: ${dbUrl}`);
//         })
//         .catch((error) => {
//             console.log("Database connection error:", error);
//         });
// }

mongoose
    .connect(dbUrl)
    .then((result) => {
        console.log(`Database has been connected, URL: ${dbUrl}`);
    })
    .catch((error) => {
        console.log("Database connection error:", error);
    });

module.exports = mongoose;
