import EvaluateDocsModel from "../models/EvaluateDocs.model.js";

export const assignMarks = async (data) => {
    const newMarks = new EvaluateDocsModel(data);
    newMarks.save()
    return newMarks;
};

export const getMarks = async () => {
  const marks = await EvaluateDocsModel.find({});
  return marks;
};

export const getOneMark = async (id) => {
  const mark = await EvaluateDocsModel.findById(id);
  return mark;
};

export const updateMarks = async (id, newData) => {
  await EvaluateDocsModel.findByIdAndUpdate(id, newData);
  return EvaluateDocsModel.findById(id);
};

export const deleteMarks = async (id) => {
  await EvaluateDocsModel.findByIdAndDelete(id);
  return "Successfully Deleted!";
};
