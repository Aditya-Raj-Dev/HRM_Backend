import express from "express";
import userRoute from "./Routes/usersRoute.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import attendanceRoute from "./Routes/attendanceRoute.js";
import leaveRoute from "./Routes/LeaveRoute.js";
import payrollRoute from "./Routes/payrollRoute.js";
import cors from "cors";

dotenv.config()

const app=express();

app.use(express.json())
app.use(cors())

app.use("/api/user",userRoute)
app.use("/api/attendance",attendanceRoute)
app.use("/api/leave",leaveRoute)
app.use("/payroll",payrollRoute)

const port=process.env.PORT || 1337

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connected To MongoDB"))
.catch((err)=>console.log("Can't connet To MongoDB",err))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


