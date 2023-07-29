import { Request, Response } from "express";

// Used when user tries to access route that does not exists
const notFound = (req: Request, res: Response) =>
  res.status(404).send("Route dos not exists.");

module.exports = notFound;
