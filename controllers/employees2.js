const executeThisQuery = require("../db/querywrapper");
// this file uses custom query wrapper function to query database.
async function getAllEmployess2(req, res) {
  try {
    const sql = "select * from `employee_details`";
    const [employess] = await executeThisQuery(sql, []);
    // console.log(employess);
    res.status(200).json({ success: true, data: employess });
    // console.log(fields);
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
}

const getSingleEmployee2 = async (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM `employee_details` WHERE `id` = ?";
  try {
    const [employee] = await executeThisQuery(sql, [id]);
    if (employee.length === 0) {
      return res.status(404).json({ success: false });
    }
    console.log(employee);
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    res.status(404).json({ success: false });
  }
};

const createEmplyee2 = async (req, res) => {
  const values = req.body;
  console.log(values);
  // const sql =
  //   "INSERT INTO `employee_details`( `id`, `emp_name`, `dept`, `salary`, `emp_mobile`) VALUES (?, ?, ?, ?, ?)";

  let sql =
    "INSERT INTO `employee_details` (`id`, `emp_name`, `dept`, `salary`, `emp_mobile`) VALUES (?,?,?,?,?)";
  try {
    const [result] = await executeThisQuery(sql, [
      values.id,
      values.emp_name,
      values.dept,
      values.salary,
      values.emp_mobile,
    ]);
    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

module.exports = { getAllEmployess2, getSingleEmployee2, createEmplyee2 };
