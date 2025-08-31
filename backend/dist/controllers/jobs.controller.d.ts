import type { Request, Response } from "express";
export declare function getJobs(req: Request, res: Response): Promise<void>;
interface AuthRequest extends Request {
    user?: {
        id: string;
    };
}
export declare const createJob: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare function getJobById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function updateJobById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteJobById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare const applyForJob: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getJobApplicants: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getMyJobsWithApplicants: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
