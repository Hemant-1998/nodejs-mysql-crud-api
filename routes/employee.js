const express = require("express");
const {
  getAllEmployess,
  getSingleEmployee,
  updateEmployee,
  deleteEmployee,
  createEmplyee,
} = require("../controllers/employess");
const {
  getAllEmployess2,
  getSingleEmployee2,
  createEmplyee2,
} = require("../controllers/employees2");

const router = express.Router();

// router.route("/").get(getAllEmployess).post(createEmplyee);
router.route("/").get(getAllEmployess2).post(createEmplyee2);

router
  .route("/:id")
  .get(getSingleEmployee2)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
