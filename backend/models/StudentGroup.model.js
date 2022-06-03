import mongoose from "mongoose";

const Schema = mongoose.Schema;

const stdGroupSchema = new Schema({
  students: { type: Array, required: true },
  groupName: { type: String, required: true },
  alctdSupervisor: { type: String, default: "", required: false },
  alctdCoSupervisor: {type: String, default: "", required: false},
  panel: {type: Array, default: [], required: false},
  allocated: { type: Boolean, required: true },
});

const stdGroupModel = mongoose.model("StudentGroup", stdGroupSchema);

export default stdGroupModel;
