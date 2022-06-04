import ProjectDocsModel from "../models/ProjectDocs.model.js"

export const submitProjectDocs = async (info) => {
    const newScheme = new ProjectDocsModel(info)
    await newScheme.save()
    return newScheme
};

export const getProjectDocs = async () => {
  const ProjectDocs = await ProjectDocsModel.find({});
  return ProjectDocs;
};

export const getOneProjectDoc = async (id) => {
  const ProjectDocs = await ProjectDocsModel.findById(id);
  return ProjectDocs;
};