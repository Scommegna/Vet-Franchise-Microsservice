import mongoose from "mongoose";
import { petSchema } from "./pets";

// Tutors schema for database
export const tutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Tutor name must be provided."],
  },
  phone: {
    type: String,
    required: [true, "Tutor phone number must be provided."],
  },
  email: {
    type: String,
    required: [true, "Tutor email must be provided."],
  },
  date_of_birth: {
    type: Date,
    required: [true, "Tutor birth date must be provided"],
  },
  zip_code: {
    type: String,
    required: [true, "Tutor zipcode must be provided."],
  },
  pets: [petSchema],
});

export default mongoose.model("Tutors", tutorSchema);
