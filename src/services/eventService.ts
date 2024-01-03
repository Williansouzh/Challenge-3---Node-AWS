import EventModel from "@/database/models/eventModel";
import { ApiError } from "@/helpers/api-errors";
import { IEvent } from "@/interfaces/eventInterface";

class EventService {
  static async createEvent(eventData: IEvent) {
    try {
      const createdEvent = await EventModel.create(eventData);

      const { description, dayOfWeek } = createdEvent;

      return { description, dayOfWeek };
    } catch (error) {
      console.error(error);

      throw new ApiError(
        "Error occurred while creating event",
        500,
        "internal_error",
        "EventService.createEvent"
      );
    }
  }
  static async getAllEvents() {
    try {
      const allEvents = await EventModel.find();
      return allEvents;
    } catch (error) {
      console.log(error);
      throw new ApiError(
        "Error occurred while get events",
        500,
        "internal_error",
        "EventService.getAllEvents"
      );
    }
  }
}

export default EventService;
