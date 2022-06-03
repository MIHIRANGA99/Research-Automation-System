import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EvaluateDocsSchema = new Schema({
  groupID: { type: String, required: true },
  marksDetails: { type: Array, required: true },
});

const EvaluateDocsModel = mongoose.model("EvaluateDocuments", EvaluateDocsSchema );

export default EvaluateDocsModel;
