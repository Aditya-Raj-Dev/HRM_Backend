import express from "express";
import { CreateUser, DeleteuserById, GetAllUsers, GetuserById, UpdateUserById } from "../Controller/UserController.js";

const userRoute = express.Router()

userRoute.get("/read/all", GetAllUsers)

userRoute.get("/read/:id", GetuserById)

userRoute.delete("/delete/:id", DeleteuserById)

userRoute.post("/create", CreateUser),

userRoute.post("/update/:id", UpdateUserById)

export default userRoute