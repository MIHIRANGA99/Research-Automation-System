import MarkingSchemeModel from "../models/MarkingScheme.model.js"

export const createMarkingScheme = async (info) => {
    const newScheme = new MarkingSchemeModel(info)
    await newScheme.save()
    return newScheme
};

export const getMarkingSchemes = async () => {
  const MarkingSchemes = await MarkingSchemeModel.find({});
  return MarkingSchemes;
};

export const getOneMarkingSchemes = async (id) => {
  const MarkingSchemes = await MarkingSchemeModel.findById(id);
  return MarkingSchemes;
};

export const updateMarkingSchemes = async (id, newData) => {
  await MarkingSchemeModel.findByIdAndUpdate(id, newData);
  return MarkingSchemeModel.findById(id);
};
