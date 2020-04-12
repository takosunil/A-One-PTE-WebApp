import config from "config";
import handleResponse from "./handle-response";

const getAllQuestion = () => {
  return fetch(`${config.apiUrl}/api/v1/questions`)
    .then(handleResponse)
    .then(questions => {
      return questions;
    });
};

export const questionsServices = {
  getAllQuestion
};
