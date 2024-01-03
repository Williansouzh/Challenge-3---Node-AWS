import EventController from "@/controllers/eventController";
import { authMiddleware } from "@/middlewares/authMiddleware";
import Router from "express";

const eventRoutes = Router();

eventRoutes.use(authMiddleware);
eventRoutes.post("/events", EventController.CreateEvent);
eventRoutes.get("/events", EventController.getAllEvents);

export default eventRoutes;
