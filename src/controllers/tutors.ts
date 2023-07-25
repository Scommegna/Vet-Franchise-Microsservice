import { Request, Response } from "express";

const Tutor = require("../models/tutor");

// Creates new tutor
const createTutor = async function (req: Request, res: Response) {
  const newTutor = Tutor.create(req.body);
  res.status(201).json({ newTutor });
};

module.exports = {
  createTutor,
};
