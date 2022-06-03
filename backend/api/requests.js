import RequestsModel from "../models/Requests.model.js";

export const getRequests = async () => {
  const requests = await RequestsModel.find({});
  return requests;
};

export const getOneRequest = async (id) => {
  const request = await RequestsModel.findById(id);
  return request;
};

export const updateRequest = async (id, newData) => {
  await RequestsModel.findByIdAndUpdate(id, newData);
  return RequestsModel.findById(id);
};

export const deleteRequest = async (id) => {
  await RequestsModel.findByIdAndDelete(id);
  return "Successfully Deleted!";
};
