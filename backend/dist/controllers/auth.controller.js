import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";
export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "User already exists" });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: "User registered successfully", userId: newUser._id });
    }
    catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "Invalid credentials" });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid credentials" });
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.json({ token, userId: user._id, username: user.username });
    }
    catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};
// Get current user info
export const getMe = async (req, res) => {
    try {
        // The user info is already available from the auth middleware
        const user = req.user;
        if (!user) {
            return res.status(401).json({ message: "Not authenticated" });
        }
        // Find the user in database to get full details
        const userDetails = await UserModel.findById(user.id).select('-password');
        if (!userDetails) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            message: "User info retrieved successfully",
            user: {
                _id: userDetails._id,
                username: userDetails.username,
                email: userDetails.email
            }
        });
    }
    catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};
//# sourceMappingURL=auth.controller.js.map