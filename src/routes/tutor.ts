import express from "express";
const router = express.Router();

const {
  createTutor,
  updateTutor,
  deleteTutor,
} = require("../controllers/tutors");

// All tutor routes
router.route("/").post(createTutor);
router.route("/:id").put(updateTutor).delete(deleteTutor);

module.exports = router;
