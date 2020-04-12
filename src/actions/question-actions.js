import { questionsServices } from "../services";
import { QUESTION_ACTION_TYPE } from "../constants/questionConstants";

function getAllQuestion() {
  function request() {
    return { type: QUESTION_ACTION_TYPE.GET_ALL_QUESTION_REQUEST };
  }
  function success(questions) {
    return { type: QUESTION_ACTION_TYPE.GET_ALL_QUESTION_SUCCESS, questions };
  }
  function failure(error) {
    return { type: QUESTION_ACTION_TYPE.GET_ALL_QUESTION_FAILURE, error };
  }

  return dispatch => {
    dispatch(request());
    return questionsServices.getAllQuestion().then(
      data => {
        dispatch(success(data));
      },
      error => {
        dispatch(failure(error.toString()));
      }
    );
  };
}

export const questionActions = {
  getAllQuestion
};
