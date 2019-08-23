import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;

export default async payload =>
  await jwt.sign(payload, JWT_SECRET, { expiresIn: "365d" });
