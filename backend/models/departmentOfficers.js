import mongoose from "mongoose";

const departmentOfficersSchema = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  tc_kimlik: Number,
  department: String,
});

const DepartmentOfficer = mongoose.model(
  "DEPARTMENTOFFICER",
  departmentOfficersSchema
);

export default DepartmentOfficer;
