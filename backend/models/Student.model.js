import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  student_id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  faculty: { type: String, required: true },
  password: {type: String, required: true}
});

StudentSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "30d"})
  return token
};

const StudentModel = mongoose.model("Student", StudentSchema);

export default StudentModel