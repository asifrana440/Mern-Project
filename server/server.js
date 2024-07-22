
require("dotenv").config();
const express = require('express');
const cors =require("cors");
const app = express();
const authRoute = require("./router/auth_router");
const contactRoute = require("./router/contact-router");
const serviceRoute= require("./router/service-router");
const adminRoute=require("./router/admin-router")
const connectDb =require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

const corsOptions = {
    origin: "http://localhost:5173",
    methods:" GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true 
  }

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin",adminRoute);
app.use(errorMiddleware);

const port = 3000;
connectDb().then(()=>{
app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
});
});









// const mongoose=require("mongoose")


// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
      // useCreateIndex: true,
      // useUnifiedTopology: true
//   })
//   .then(() => console.log('DB Connected'));


// const port = process.env.PORT || 3030;

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })

