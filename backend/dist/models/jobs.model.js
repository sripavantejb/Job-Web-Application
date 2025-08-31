import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
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
export const JobModel = mongoose.model("Job", jobSchema);
//# sourceMappingURL=jobs.model.js.map