const express = require("express");
const router = express.Router();

const { createTutor } = require("../controllers/tutors");

// All tutor routes
router.route("/").post(createTutor);

module.exports = router;
