import EventController from "@/controllers/eventController";
import { authMiddleware } from "@/middlewares/authMiddleware";
import Router from "express";

const eventRoutes = Router();

eventRoutes.use(authMiddleware);
eventRoutes.post("/events", EventController.CreateEvent);
eventRoutes.get("/events", EventController.getAllEvents);

eventRoutes.get("/events", EventController.getById);

eventRoutes.delete("/events", EventController.deleteEvent);

export default eventRoutes;
