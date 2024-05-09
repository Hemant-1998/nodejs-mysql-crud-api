const express = require("express");
const {
  getAllEmployess,
  getSingleEmployee,
  updateEmployee,
  deleteEmployee,
  createEmplyee,
} = require("../controllers/employess");

const router = express.Router();

router.route("/").get(getAllEmployess).post(createEmplyee);

router
  .route("/:id")
  .get(getSingleEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
