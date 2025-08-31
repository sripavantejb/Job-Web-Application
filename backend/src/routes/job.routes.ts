import { Router } from "express";
import { get } from "http";
import { getJobs, createJob, updateJobById, deleteJobById, getJobById, applyForJob, getMyJobsWithApplicants } from "../controllers/jobs.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";


const router = Router(); //created a router instance


//routes linked to controller functions
router.get("/", authenticate, getJobs);

router.get("/my-applicants", authenticate, getMyJobsWithApplicants);

router.post("/", authenticate, createJob);

// Specific routes must come BEFORE generic parameter routes
router.post("/:jobId/apply", authenticate, applyForJob);

// Generic parameter routes come last
router.get("/:jobId", authenticate, getJobById);

router.put("/:jobId", authenticate, updateJobById);

router.delete("/:jobId", authenticate, deleteJobById);



export default router;
