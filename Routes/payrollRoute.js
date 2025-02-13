import express from "express"
import { payrollCalculator } from "../Controller/PayrollController"

const payrollRoute=express.Router()

payrollRoute.post("/:id",payrollCalculator)

export default payrollRoute