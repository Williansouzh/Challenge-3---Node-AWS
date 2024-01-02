import express, { Request, Response } from "express";
import userRoutes from "./routes/userRoutes";
import "express-async-errors";
import { errorMiddleware } from "./middlewares/errorHandler";
const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(errorMiddleware);
export default app;
