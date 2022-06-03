import EvaluateDocsModel from "../models/Requests.model.js";

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
