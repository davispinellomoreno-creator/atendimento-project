import { Router } from "express";
import {
  createAppointment,
  getAppointments,
  deleteAppointment
} from "../controllers/appointmentController";

import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authMiddleware, createAppointment);
router.get("/", authMiddleware, getAppointments);
router.delete("/:id", authMiddleware, deleteAppointment);

export default router;