import express from "express";
import { CreateUser, DeleteuserById, GetAllUsers, GetuserById, UpdateUserById, UserLogin } from "../Controller/UserController.js";
import { authenticateUserAccess } from "../Middleware/authenticateUserAccess.js";

const userRoute = express.Router()

userRoute.get("/read/all",authenticateUserAccess, GetAllUsers)

userRoute.get("/read/:id", GetuserById)

userRoute.delete("/delete/:id", DeleteuserById)

userRoute.post("/create", CreateUser),

userRoute.post("/update/:id", UpdateUserById)

userRoute.post("/login",UserLogin)

export default userRoute