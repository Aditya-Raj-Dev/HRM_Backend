import express from "express";
import { AttendanceCheckin, AttendanceCheckOut } from "../Controller/AttendanceController.js";


const attendanceRoute = express.Router()

attendanceRoute.post("/checkin", AttendanceCheckin)

attendanceRoute.post("/checkout", AttendanceCheckOut)

export default attendanceRoute