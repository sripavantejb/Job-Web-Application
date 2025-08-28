import { Router } from "express";
import { get } from "http";
import { getJobs, createJob, updateJobById, deleteJobById, getJobById } from "../controllers/jobs.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";


const router = Router(); //created a router instance


//routes linked to controller functions
router.get("/", authenticate, getJobs);

router.post("/", authenticate, createJob);

router.get("/:id", authenticate, getJobById);

router.put("/:id", authenticate, updateJobById);

router.delete("/:id", authenticate, deleteJobById);



export default router;
