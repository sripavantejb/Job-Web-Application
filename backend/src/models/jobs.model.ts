import mongoose from "mongoose";

export interface Job {
    title: string;
    description: string;
    company: string;
    location: string; 
    salary: string; 
    postedDate?: Date;
    createdBy: mongoose.Schema.Types.ObjectId; 
    applicants: mongoose.Schema.Types.ObjectId[]; 
}

const jobSchema = new mongoose.Schema<Job>({ 
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String, required: false },
    postedDate: { type: Date, default: Date.now },
    
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    applicants: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }]
});

export const JobModel = mongoose.model<Job>("Job", jobSchema);