import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MarkingScheme = new Schema({
    name: {type: String, required: true},
    faculty: {type: String, required: true},
    url: {type: String, required: true},
});

const MarkingSchemeModel = mongoose.model("MarkingScheme", MarkingScheme);

export default MarkingSchemeModel;