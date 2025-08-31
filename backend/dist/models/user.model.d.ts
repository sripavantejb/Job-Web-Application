import mongoose, { Document } from "mongoose";
export interface User extends Document {
    username: string;
    email: string;
    password: string;
}
export declare const UserModel: mongoose.Model<User, {}, {}, {}, mongoose.Document<unknown, {}, User, {}, {}> & User & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
