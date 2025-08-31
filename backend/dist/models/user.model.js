import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // hashed password
}, { timestamps: true });
export const UserModel = mongoose.model("User", userSchema);
//# sourceMappingURL=user.model.js.map