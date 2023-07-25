const express = require("express");
const router = express.Router();

const { createTutor, updateTutor } = require("../controllers/tutors");

// All tutor routes
router.route("/").post(createTutor);
router.route("/:id").put(updateTutor);

module.exports = router;
