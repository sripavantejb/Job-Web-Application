import type { Request, Response } from "express";
import { JobModel } from "../models/jobs.model.js";
import mongoose, { Types } from 'mongoose'; 



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

interface AuthRequest extends Request {
    user?: {
      id: string;
    };
  }
  
  export const createJob = async (req: AuthRequest, res: Response) => { 
    try {
      const { title, company, location, salary, description } = req.body;
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const userId = req.user.id; 

      // Create a new job instance, including the createdBy field
      const newJob = new JobModel({
        title,
        company,
        location,
        salary,
        description,
        createdBy: userId
      });
  
      // Save the new job to the database
      await newJob.save();
      res.status(201).json(newJob);
  
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };


// to get a single job by ID
export async function getJobById(req: Request, res: Response) {
    try {
        const job = await JobModel.findById(req.params.jobId);
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
        const job = await JobModel.findByIdAndUpdate(req.params.jobId, req.body, { new: true });
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
        const job = await JobModel.findByIdAndDelete(req.params.jobId);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
}



// apply for a job
export const applyForJob = async (req: AuthRequest, res: Response) => {
    try {
      const jobId = req.params.jobId;
  
      if (!req.user) {
        return res.status(401).json({ message: 'Authentication error, user not found.' });
      }
      const userId = req.user.id;
  
      const job = await JobModel.findById(jobId);
  
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
  
      if (job.createdBy.toString() === userId) {
          return res.status(400).json({ message: "You cannot apply to your own job post." });
      }
  
      const applicantsAsStrings = job.applicants.map(applicantId => applicantId.toString());
      if (applicantsAsStrings.includes(userId)) {
        return res.status(400).json({ message: 'You have already applied for this job' });
      }
  

      job.applicants.push(new mongoose.Schema.Types.ObjectId(userId));
      await job.save();
  
      res.status(200).json({ message: 'Applied successfully!' });
  
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };



export const getMyJobsWithApplicants = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Authentication error, user not found.' });
        }
        const userId = req.user.id;

        // Find all jobs created by the current user and populate applicants with user details
        const jobs = await JobModel.find({ createdBy: userId })
            .populate('applicants', 'username email') // Populate applicant details
            .sort({ postedDate: -1 }); // Sort by newest first

        res.status(200).json({ jobs });
    } catch (error) {
        console.error("Get my jobs error:", error);
        res.status(500).json({ message: 'Server Error' });
    }
};