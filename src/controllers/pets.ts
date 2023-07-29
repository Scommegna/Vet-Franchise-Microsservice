import { NextFunction, Request, Response } from "express";

import { CustomAPIError } from "../errors/custom-error";

import Tutor from "../models/tutor";
import Pet from "../models/pets";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

// Creates pet data for tutor with given id
const createPet = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id: tutorId } = req.params;
    const { body } = req;

    const tutorToAddPet = await Tutor.findOne({ _id: tutorId });

    if (!tutorToAddPet) {
      throw new CustomAPIError("Tutor not found!", 404);
    }

    const completeBody = { ...body, owner: tutorId };

    const newPet = await Pet.create(completeBody);

    if (!newPet) {
      throw new CustomAPIError("Could not create user!", 400);
    }

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
  } catch (error) {
    next(error);
  }
};

// Updates pet info of tutor of given id
const updatesPetInfo = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
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

    if (!petToBeUpdated) {
      throw new CustomAPIError("Pet not found!", 404);
    }

    const owner = await Tutor.findById(tutorId);

    if (!owner) {
      throw new CustomAPIError("Tutor not found!", 404);
    }

    const allOwnersPets = await Pet.aggregate([
      {
        $match: {
          owner: new ObjectId(tutorId),
        },
      },
    ]);

    owner.pets = allOwnersPets;

    const tutorToUpdate = await Tutor.findByIdAndUpdate(
      { _id: tutorId },
      owner,
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json(petToBeUpdated);
  } catch (error) {
    next(error);
  }
};

// Deletes pet of tutor by id
const deletePet = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { petId, tutorId } = req.params;

    const petToBeDeleted = await Pet.findOneAndDelete({
      _id: petId,
      owner: tutorId,
    });

    if (!petToBeDeleted) {
      throw new CustomAPIError("Pet not found!", 404);
    }

    const owner = await Tutor.findById(tutorId);

    if (!owner) {
      throw new CustomAPIError("Tutor not found!", 404);
    }

    const allOwnersPets = await Pet.aggregate([
      {
        $match: {
          owner: new ObjectId(tutorId),
        },
      },
    ]);

    owner.pets = allOwnersPets;

    const tutorToUpdate = await Tutor.findByIdAndUpdate(
      { _id: tutorId },
      owner,
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json(petToBeDeleted);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPet,
  updatesPetInfo,
  deletePet,
};
