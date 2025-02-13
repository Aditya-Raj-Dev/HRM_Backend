import jwt from "jsonwebtoken"

export const authenticateUserAccess =async (req,res,next)=>{
    const auth = req.headers.authorization;
    console.log(auth,auth)
    const token = auth.split(" ")[1];
    const decodedUser = jwt.verify(token, process.env.JWT_TOKEN);
    console.log(decodedUser)
    next()
}