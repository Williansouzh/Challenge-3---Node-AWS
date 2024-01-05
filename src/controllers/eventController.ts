import { IEvent } from "../interfaces/eventInterface";
import EventService from "../services/eventService";
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
  static async getById(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    try {
      const event = await EventService.getByID(id);
      res.json(event);
    } catch (error) {
      next(error);
    }
  }
  static async getAllEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const allEvents = await EventService.getAllEvents();
      res.json(allEvents);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async deleteEvent(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    try {
      const deletedEvent = await EventService.deleteEvent(id);
      res.json(deletedEvent);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async WeeklyEventDeletion(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const week: string = req.body.week;
    try {
      const WeeklyEventDelete = await EventService.WeeklyEventDeletion(week);
      res.json(WeeklyEventDelete);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default EventController;
