import { IEvent } from "@/interfaces/eventInterface";
import EventService from "@/services/eventService";
import { NextFunction, Request, Response } from "express";

class EventController {
  static async CreateEvent(req: Request, res: Response, next: NextFunction) {
    const { dayOfWeek, description, userID } = req.body;
    try {
      const newEvent: IEvent = {
        dayOfWeek,
        description,
        userID,
      };
      const event = await EventService.createEvent(newEvent);
      res.status(201).json({ event });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async getAllEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const allEvents = await EventService.getAllEvents();
      res.json({ event });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default EventController;
