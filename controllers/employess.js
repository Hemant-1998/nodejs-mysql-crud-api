const connectDb = require("../db/connectDb");

let connection;

(async () => {
  connection = await connectDb("pando");
})();

const getAllEmployess = async (req, res) => {
  try {
    const [employess, fields] = await connection.query(
      "select * from employee_details"
    );
    console.log(employess);
    res.status(200).json({ success: true, data: employess });
    // console.log(fields);
  } catch (error) {
    res.status(404).json({ success: false });
  }
};

const createEmplyee = async (req, res) => {
  const values = req.body;
  console.log(values);
  // const sql =
  //   "INSERT INTO `employee_details`( `id`, `emp_name`, `dept`, `salary`, `emp_mobile`) VALUES (?, ?, ?, ?, ?)";

  let sql =
    "INSERT INTO `employee_details` (`id`, `emp_name`, `dept`, `salary`, `emp_mobile`) VALUES (?,?,?,?,?)";
  try {
    const [result] = await connection.query(sql, [
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

const getSingleEmployee = async (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM `employee_details` WHERE `id` = ?";
  try {
    const [employee] = await connection.query(sql, [id]);
    if (employee.length === 0) {
      return res.status(404).json({ success: false });
    }
    console.log(employee);
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    res.status(404).json({ success: false });
  }
};

const updateEmployee = async (req, res) => {
  const sql = `UPDATE employee_details SET ? WHERE id = ${req.params.id}`;
  // console.log(sql);

  if (!req.body.id) {
    try {
      const [result] = await connection.query(sql, [req.body]);
      return res.status(201).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false });
    }
  }
  return res.status(500).json({ success: false });
};

const deleteEmployee = async (req, res) => {
  try {
    const sql = `DELETE FROM employee_details WHERE id = ?`;
    await connection.query(sql, [req.params.id]);
    return res.status(204).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};

module.exports = {
  getAllEmployess,
  getSingleEmployee,
  deleteEmployee,
  updateEmployee,
  createEmplyee,
};
