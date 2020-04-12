import { QUESTION_ACTION_TYPE } from "../constants";

export function questions(state = {}, action) {
  switch (action.type) {
    case QUESTION_ACTION_TYPE.GET_ALL_QUESTION_REQUEST:
      return {
        loading: true
      };
    case QUESTION_ACTION_TYPE.GET_ALL_QUESTION_SUCCESS:
      return {
        questions: action.questions,
        loading: false
      };
    case QUESTION_ACTION_TYPE.GET_ALL_QUESTION_FAILURE:
      return {
        error: action.error,
        loading: true
      };
    default:
      return state;
  }
}
