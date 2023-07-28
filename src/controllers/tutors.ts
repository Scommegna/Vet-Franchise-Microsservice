import { NextFunction, Request, Response } from "express";

import { createCustomError } from "../errors/custom-error";

import Tutor from "../models/tutor";

// Gets all tutors data
const getTutors = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const tutors = await Tutor.find({});
    res.status(200).json({ tutors });
  } catch (error) {
    next(error);
  }
};

// Creates new tutor
const createTutor = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body } = req;

    const newTutor = Tutor.create(body);

    if (!newTutor) {
      return next(createCustomError("Tutor not found!", 404));
    }

    res.status(201).json({ newTutor });
  } catch (error) {
    next(error);
  }
};

// Updates tutor info
const updateTutor = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id: tutorId } = req.params;
    const { body } = req;

    const tutor = await Tutor.findByIdAndUpdate({ _id: tutorId }, body, {
      new: true,
      runValidators: true,
    });

    if (!tutor) {
      return next(createCustomError("Tutor not found!", 404));
    }

    res.status(200).json({ tutor });
  } catch (error) {
    next(error);
  }
};

// Deletes tutor
const deleteTutor = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id: tutorId } = req.params;

    const tutor = await Tutor.findByIdAndDelete({ _id: tutorId });

    if (!tutor) {
      return next(createCustomError("Tutor not found!", 404));
    }

    res.status(200).json({ tutor });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTutors,
  createTutor,
  updateTutor,
  deleteTutor,
};
