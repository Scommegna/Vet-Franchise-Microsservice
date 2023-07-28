// Gets environment variables
require("dotenv").config();

import { connectDB } from "./db/connect";

const tutorRouter = require("./routes/tutor");
const tutorsRouter = require("./routes/tutors");
const petsRouter = require("./routes/pets");

const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");

const express = require("express");

const app = express();

// Middlewares
app.use(express.json());
app.use(errorHandlerMiddleware);

// Gets all "tutor" routes
app.use("/tutor", tutorRouter);
app.use("/tutors", tutorsRouter);

// Gets all "pets" routes
app.use("/pet", petsRouter);

const port = process.env.PORT || 3000;

// Starts the application
const start = async function () {
  try {
    await connectDB(process.env.MONGO_URI!);
    app.listen(port, console.log(`App is listening port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
