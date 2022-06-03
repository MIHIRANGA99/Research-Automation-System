import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TopicRegistration = new Schema({
    groupName: {type: String, required:  true},
    topic: {type: String, required: true},
    resources: {type: Array, required: false}
});

const TopicRegistrationModel = mongoose.model("Topics", TopicRegistration);

export default TopicRegistrationModel;