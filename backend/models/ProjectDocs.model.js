import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectDocsSchema = new Schema({
    groupId: {type: String, required: true},
    docName: {type: String, required: true},
    faculty: {type: String, required: true},
    url: {type: String, required: true},
});

const ProjectDocsModel = mongoose.model("ProjectDocs", ProjectDocsSchema);

export default ProjectDocsModel;