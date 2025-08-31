import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
const router = Router();
router.post("/register", register);
router.post("/login", login);
router.get("/me", authenticate, getMe);
export default router;
//# sourceMappingURL=auth.route.js.map