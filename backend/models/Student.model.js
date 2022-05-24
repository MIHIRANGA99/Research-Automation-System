import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  id_no: { type: String, required: true },
  student_id: { type: String, required: true },
  faculty: { type: String, required: true },
  name: { type: String, required: true },
});

const StudentModel = mongoose.model("Student", StudentSchema);

export default StudentModel;
