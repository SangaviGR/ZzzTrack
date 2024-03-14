const express = require("express");
const sleepController = require("../controllers/sleepController");
const router = express.Router();

// Route definitions
router
  .route("/")
  .get(sleepController.getAllSleepEntries)
  .post(sleepController.createSleepEntry);

router
  .route("/:id")
  .put(sleepController.updateSleepEntry)
  .delete(sleepController.deleteSleepEntry);

module.exports = router;
