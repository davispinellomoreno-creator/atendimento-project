import { Router } from "express";
import { register } from "../controllers/authContoller";

const router = Router();

router.post("/register", register);

export default router;