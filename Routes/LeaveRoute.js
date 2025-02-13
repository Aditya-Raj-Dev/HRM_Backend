import express from 'express'
import { LeaveAction, LeaveApply } from '../Controller/LeaveController.js'

const leaveRoute= express.Router()

leaveRoute.post("/apply",LeaveApply)

leaveRoute.post("/action",LeaveAction)

export default leaveRoute