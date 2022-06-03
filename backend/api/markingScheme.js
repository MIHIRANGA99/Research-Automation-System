import MarkingSchemeModel from "../models/MarkingScheme.model.js"

export const createMarkingScheme = async (info) => {
    const newScheme = new MarkingSchemeModel(info)
    await newScheme.save()
    return newScheme
}
