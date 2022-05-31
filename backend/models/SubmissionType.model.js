import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubmissionType = new Schema({
  type: {type: String, required: true},
  name: {type: String, required: true},
  faculty: {type: String, required: true}
});

const SubmissionTypeModel = mongoose.model("SubmissionType", SubmissionType);

export default SubmissionTypeModel;
