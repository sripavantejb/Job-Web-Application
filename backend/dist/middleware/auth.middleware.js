import jsonwebtoken from "jsonwebtoken";
const jwt = jsonwebtoken;
export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN
    console.log("Token:", token);
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log("DEBUG: Decoded user:", decoded);
        next();
    }
    catch (err) {
        console.error("JWT verification error:", err);
        return res.status(401).json({ message: "Invalid token" });
    }
};
//# sourceMappingURL=auth.middleware.js.map