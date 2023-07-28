import express from "express";
const router = express.Router();

const { createPet, updatesPetInfo } = require("../controllers/pets");

// All pets routes
router.route("/:id").post(createPet);
router.route("/:petId/tutor/:tutorId").put(updatesPetInfo);

module.exports = router;
