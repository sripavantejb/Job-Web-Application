import type { Request, Response } from "express";
import { JobModel } from "../models/jobs.model.js";



// read all the jobs
export async function getJobs(req: Request, res: Response) {
    try {
        const jobs = await JobModel.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
}

// to createJob posting
export async function createJob(req: Request, res: Response) {
    try {
        const job = new JobModel(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
}

// to get a single job by ID
export async function getJobById(req: Request, res: Response) {
    try {
        const job = await JobModel.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
}

// to update a job by ID
export async function updateJobById(req: Request, res: Response) {
    try {
        const job = await JobModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json({ message: "Job updated successfully", job });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
}
// to delete a job by ID
export async function deleteJobById(req: Request, res: Response) {
    try {
        const job = await JobModel.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
}