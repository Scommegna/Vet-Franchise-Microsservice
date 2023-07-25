import mongoose from "mongoose";

// Pet db schema
export const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pet name must be provided."],
  },
  species: {
    type: String,
    required: [true, "Pet species must be provided."],
  },
  carry: {
    type: String,
    required: [true, "Pet carry must be provided."],
  },
  weight: {
    type: Number,
    required: [true, "Pet weight must be provided."],
  },
  date_of_birth: {
    type: Date,
    required: [true, "Pet date of birth must be provided."],
  },
});
