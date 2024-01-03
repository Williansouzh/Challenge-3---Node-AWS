import mongoose, { Document, Schema } from "mongoose";
import { IEvent } from "@/interfaces/eventInterface";

const eventSchema = new Schema<IEvent & Document>({
  description: { type: String, required: true },
  dayOfWeek: { type: String, required: true },
  userID: { type: String, required: true },
});

const EventModel = mongoose.model<IEvent & Document>("Event", eventSchema);

export default EventModel;
