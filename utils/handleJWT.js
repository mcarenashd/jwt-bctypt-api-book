import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
export const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sign
};

export const verifyToken = async () => {};
