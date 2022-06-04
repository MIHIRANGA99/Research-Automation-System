import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EvaluateSchema = new Schema({
    groupID: {type: String, required: true},
    remark: {type: String, required: true},
    status: {type: String, required: true},
});

const EvaluateTopicModel = mongoose.model("EvaluateTopic", EvaluateSchema);

export default EvaluateTopicModel;