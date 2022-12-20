import DepartmentOfficer from "../models/departmentOfficers.js";

const getDepOfficers = async (req, res) => {
  console.log("getDepOfficers is running...");

  try {
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export default getDepOfficers;
