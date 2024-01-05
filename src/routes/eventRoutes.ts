import EventController from "../controllers/eventController";
import { authMiddleware } from "../middlewares/authMiddleware";
import Router from "express";

const eventRoutes = Router();

eventRoutes.use(authMiddleware);
eventRoutes.post("/events", EventController.CreateEvent);
eventRoutes.get("/events", EventController.getAllEvents);

eventRoutes.get("/events/:id", EventController.getById);

eventRoutes.delete("/events/:id", EventController.deleteEvent);

eventRoutes.delete("/events", EventController.WeeklyEventDeletion);

export default eventRoutes;
