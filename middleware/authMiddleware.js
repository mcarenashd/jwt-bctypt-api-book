import UserModel from "../models/UserModel";
import { verifyToken } from "../utils/handleJWT";

export const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization){
      return res.status(401).json({ error: "NEED_SESSION" });
    }
    const userToken = req.headers.authorization.split(" ").pop()
    const dataToken = await verifyToken(userToken)
    const user = await UserModel.findByPk(dataToken.id)
    req.user = user
    next()
  } catch (error) {}
  res.status(401).json({error:"NOT_SESSION", message: error.message})
};
