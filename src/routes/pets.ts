import express from "express";
const router = express.Router();

const { createPet } = require("../controllers/pets");

// All pets routes
router.route("/:id").post(createPet);

module.exports = router;
