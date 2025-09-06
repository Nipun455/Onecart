import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    // Token le from cookie or header
    let token = req.cookies?.token || req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "Not Authorized, please login again" });
    }

    // Agar "Bearer <token>" format me aaya hai toh split karo
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    // Verify token
    let verifyToken;
    try {
      verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Attach data from token
    req.adminEmail = verifyToken.email || process.env.ADMIN_EMAIL;

    next();
  } catch (error) {
    console.error("adminAuth error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default adminAuth;
