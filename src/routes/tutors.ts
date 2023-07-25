import express from "express";
const router = express.Router();

const { getTutors } = require("../controllers/tutors");

// All tutor routes
router.route("/").get(getTutors);

module.exports = router;
