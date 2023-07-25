// Gets environment variables
require("dotenv").config();

// Helps with async errors
require("express-async-errors");

import { Request, Response } from "express";

import { connectDB } from "./db/connect";

const tutorRouter = require("./routes/tutor");
const tutorsRouter = require("./routes/tutors");

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>hello</h1>");
});

// Gets all "tutor" routes
app.use("/tutor", tutorRouter);
app.use("/tutors", tutorsRouter);

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
