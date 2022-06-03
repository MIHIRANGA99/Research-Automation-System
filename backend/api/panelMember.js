import EvaluatePresentation from '../models/EvaluatePresen.model.js'

export const addEvaluDetails = async (value) => {
    const newEvaluation = new EvaluatePresentation(value);
    await newEvaluation.save();
    return newEvaluation;
}