import mongoose from "mongoose";
export interface Job {
    title: string;
    description: string;
    company: string;
    location: string;
    salary: string;
    postedDate?: Date;
    createdBy: mongoose.Types.ObjectId;
    applicants: mongoose.Types.ObjectId[];
}
export declare const JobModel: mongoose.Model<Job, {}, {}, {}, mongoose.Document<unknown, {}, Job, {}, {}> & Job & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
