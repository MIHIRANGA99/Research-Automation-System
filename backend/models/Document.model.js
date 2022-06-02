import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    url: {type: String, required: true},
});

const StaffModel = mongoose.model("Document", DocumentSchema);

export default StaffModel;