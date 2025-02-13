import express from "express";
import userRoute from "./Routes/usersRoute.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const app=express();

app.use(express.json())

app.use("/api/user",userRoute)

const port=process.env.PORT || 1337

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connected To MongoDB"))
.catch((err)=>console.log("Can't connet To MongoDB"))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


