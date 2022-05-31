import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PanelSchema = new Schema({
    members: {type: Array, required: true},
    allocatedGroups: {type: Array, default: [], required: false}
});

const PanelModel = mongoose.model("Panel", PanelSchema);

export default PanelModel;