import { Request, Response } from "express";

import Tutor from "../models/tutor";
import Pet from "../models/pets";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

// Creates pet data for tutor with given id
const createPet = async function (req: Request, res: Response) {
  const { id: tutorId } = req.params;
  const { body } = req;

  const tutorToAddPet = await Tutor.findOne({ _id: tutorId });

  const completeBody = { ...body, owner: tutorId };

  const newPet = await Pet.create(completeBody);

  tutorToAddPet?.pets.push(newPet);

  const tutorWithPetAdded = await Tutor.findByIdAndUpdate(
    { _id: tutorId },
    tutorToAddPet!,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({ newPet });
};

// Updates pet info of tutor of given id
const updatesPetInfo = async function (req: Request, res: Response) {
  const { petId, tutorId } = req.params;
  const { body } = req;

  const petToBeUpdated = await Pet.findOneAndUpdate(
    { _id: petId, owner: tutorId },
    body,
    {
      new: true,
      runValidators: true,
    }
  );

  const owner = await Tutor.findById(tutorId);

  const allOwnersPets = await Pet.aggregate([
    {
      $match: {
        owner: new ObjectId(tutorId),
      },
    },
  ]);

  owner.pets = allOwnersPets;

  const tutorToUpdate = await Tutor.findByIdAndUpdate({ _id: tutorId }, owner, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json(petToBeUpdated);
};

// Deletes pet of tutor by id
const deletePet = async function (req: Request, res: Response) {
  const { petId, tutorId } = req.params;

  const petToBeDeleted = await Pet.findOneAndDelete({
    _id: petId,
    owner: tutorId,
  });

  const owner = await Tutor.findById(tutorId);

  const allOwnersPets = await Pet.aggregate([
    {
      $match: {
        owner: new ObjectId(tutorId),
      },
    },
  ]);

  owner.pets = allOwnersPets;

  const tutorToUpdate = await Tutor.findByIdAndUpdate({ _id: tutorId }, owner, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json(petToBeDeleted);
};

module.exports = {
  createPet,
  updatesPetInfo,
  deletePet,
};
