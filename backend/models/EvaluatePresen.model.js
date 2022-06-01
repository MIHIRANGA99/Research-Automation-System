import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EvaluateSchema = new Schema({
    groupID: {type: String, required: true},
    marksDetails: {type: Object, required: true}
});

const EvaluatePresentationModel = mongoose.model("EvaluatePresentation", EvaluateSchema);

export default EvaluatePresentationModel;