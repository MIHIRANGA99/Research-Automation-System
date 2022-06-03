import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RequestsSchema = new Schema({
  groupId: { type: String, required: true },
  members: { type: Array, required: true },
  researchTopic: { type: String, required: true },
  acceptedBy: { type: String, default: "", required: false },
});

const RequestsModel = mongoose.model("Requests", RequestsSchema);

export default RequestsModel;
