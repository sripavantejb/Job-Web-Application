import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import "dotenv/config";
import jobsRoutes from './routes/job.routes.js';
import authRoutes from './routes/auth.route.js';
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;
if (!URI) {
    console.error("MONGO_URI is not defined in environment variables");
    process.exit(1);
}
async function main() {
    try {
        await connectDB(URI);
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error("Failed to start:", err);
        process.exit(1);
    }
}
main();
//routessss
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobsRoutes);
//# sourceMappingURL=server.js.map