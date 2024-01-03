import EventModel from "@/database/models/eventModel";
import { ApiError, BadRequestError, NotFoundError } from "@/helpers/api-errors";
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
  static async getByID(id: string) {
    try {
      const event = await EventModel.findById(id);

      if (!event) {
        throw new NotFoundError("Event not found");
      }
      return event;
    } catch (error) {
      throw new ApiError(
        "Error occurred while get event",
        500,
        "internal_error",
        "EventService.getById"
      );
    }
  }
  static async deleteEvent(id: string): Promise<IEvent | null> {
    const eventExisting = await EventModel.findById(id);

    if (!eventExisting) {
      throw new NotFoundError("Event not found");
    }

    const deletedEvent = await EventModel.findOneAndDelete({ _id: id });

    if (!deletedEvent) {
      throw new NotFoundError("Event not found");
    }
    return deletedEvent;
  }
}

export default EventService;
