import mongoose from "mongoose";

export interface Job {
    title: string;
    description: string;
    company: string;
    location: string; 
    salary: number;
    postedDate?: Date;
}

const jobSchema = new mongoose.Schema<Job>({ 
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
    postedDate: { type: Date, default: Date.now }
});
export const JobModel = mongoose.model<Job>("Job", jobSchema); 

