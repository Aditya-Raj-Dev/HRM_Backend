import jwt from "jsonwebtoken";

export const authenticateUserAccess = async (req, res, next) => {
  const auth = req.headers.authorization;
  console.log(auth, auth);
  const token = auth.split(" ")[1];
  if (!token) {
    return res
      .status(403)
      .json({ message: "Access denied. No token provided." });
  }
  try {
    const decodedUser = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decodedUser;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token." });
  }
};

const CheckRoleAccess = (currentRole, allowedRole) => {
  if (allowedRole.includes(currentRole)) {
    return true;
  } else {
    return false;
  }
};

export const checkRoleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    const currentRole = req.user.role;
    if (CheckRoleAccess(currentRole, allowedRoles)) {
      return next();
    } else {
      return res
        .status(403)
        .json({ message: "Access denied. You don't have permission." });
    }
  };
};
