import express, { Request, Response } from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());
app.use(userRoutes);

export default app;
