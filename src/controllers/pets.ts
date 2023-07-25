import { Request, Response } from "express";

const Tutor = require("../models/tutor");

// Creates pet data for tutor with given id
const createPet = async function (req: Request, res: Response) {
  const { id: tutorId } = req.params;
  const { body } = req;

  const tutorToAddPet = await Tutor.findOne({ _id: tutorId });
  tutorToAddPet.pets.push(body);

  const tutorWithPetAdded = await Tutor.findByIdAndUpdate(
    { _id: tutorId },
    tutorToAddPet,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({ tutorWithPetAdded });
};

module.exports = {
  createPet,
};
