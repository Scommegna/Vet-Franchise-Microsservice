import { Request, Response } from "express";

import Tutor from "../models/tutor";

// Gets all tutors data
const getTutors = async function (req: Request, res: Response) {
  const tutors = await Tutor.find({});
  res.status(200).json({ tutors });
};

// Creates new tutor
const createTutor = async function (req: Request, res: Response) {
  const newTutor = Tutor.create(req.body);
  res.status(201).json({ newTutor });
};

// Updates tutor info
const updateTutor = async function (req: Request, res: Response) {
  const { id: tutorId } = req.params;
  const { body } = req;

  const tutor = await Tutor.findByIdAndUpdate({ _id: tutorId }, body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ tutor });
};

// Deletes tutor
const deleteTutor = async function (req: Request, res: Response) {
  const { id: tutorId } = req.params;

  const tutor = await Tutor.findByIdAndDelete({ _id: tutorId });

  res.status(200).json({ tutor });
};

module.exports = {
  getTutors,
  createTutor,
  updateTutor,
  deleteTutor,
};
