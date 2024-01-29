import express from "express";
import userRoute from "./routes/userRoute";
import { errorMiddleware } from "./middlewares/errorHandler";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoute);
app.use(errorMiddleware);
export default app;
