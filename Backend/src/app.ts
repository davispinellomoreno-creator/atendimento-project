import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import appointmentRoutes from "./routes/appointmentRoutes";
import { authMiddleware } from "./middlewares/authMiddleware";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/auth", authRoutes);


app.use("/appointments", appointmentRoutes);



app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Acesso permitido 🔐",
    user: (req as any).user
  });
});

export default app;