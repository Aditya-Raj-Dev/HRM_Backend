import attendanceModel from "../Models/Attendence.js";

const getTodayRange = () => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return { start, end };
  };
  


export const AttendanceCheckin = async (req, res) => {
 const {userId}=req.body;
 const data=req.body;
 try{
    da
 }
 catch(err){

 }
} 


export const AttendanceCheckOut = async (req, res) => {

}