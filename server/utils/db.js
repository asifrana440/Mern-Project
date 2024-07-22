const mongoose = require("mongoose")

const URI = process.env.MONGODB_URI;
console.log(URI);

const connectDb=async()=>{
    try {
         await mongoose.connect(URI)
        console.log("connection  successful to DB" )
    } catch (error) {
        console.log("database connection failed")
        process.exit(0);
    }
};
module.exports = connectDb










// const mongoose = require("mongoose");

// const URI = process.env.MONGODB_URI;
// console.log(URI);

// const connectDb = async () => {
//     try {
//         const res = await mongoose.connect(URI);
//         console.log("Connection successful to DB", res);
//     } catch (error) {
//         console.error("Database connection failed:", error.message);
//         process.exit(1); // Exiting with a non-zero code to indicate failure
//     }
// };

// module.exports = connectDb;