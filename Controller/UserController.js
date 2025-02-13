import UserModel from "../Models/Users.js"
import bcrypt from "bcrypt"
import userRoute from "../../Routes/usersRoute.js";

export const CreateUser = async (req, res) => {
    let data = req.body;
    try {
        let user = await UserModel.findOne({ email: data?.email })
        if (user) {
            return res.status(400).send({ err: "This Employee Already Exist " })
        }
        else {
            if (!data.password) {
                res.status(400).send({ err: "Password Required" });
            }
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(data.password, salt);
            data.password = hash;
        }

        let UserData = await new UserModel(data).save()
        res.status(201).send({ res: "Employee Id Created" })
    } catch (err) {
        res.status(400).send({ err: err.message });
    }


}

export const GetAllUsers = async (req, res) => {
    try {
        const user = await UserModel.find({})
        res.status(201).send({ data: user })
    }
    catch (err) {
        res.status(400).send({ err: err.message });
    }

}

export const GetuserById = async (req, res) => {
    let { id } = req.params;
    try {
        let data = await UserModel.findById(id)
        res.status(201).send({ data })
    }
    catch (err) {
        res.status(400).send({ err: err.message });
    }

}

export const DeleteuserById = async (req, res) => {
    const { id } = req.params;

    try {
        let data = await UserModel.findByIdAndDelete(id)
        res.status(201).send({ res: "Employee Deleted Successfully" })
    }
    catch (err) {
        res.status(400).send({ err: err.message });
    }

}


export const UpdateUserById = async (req, res) => {
    const { id } = req.params
    const data = req.body
    delete data.email
    try {
        let result = await UserModel.findByIdAndUpdate(id, data)
        console.log(result, "result")
        res.status(201).send({ res: "Employee updated Successfully" })
    }
    catch (err) {
        res.status(400).send({ err: err.message });
    }
}



