// https://redux.js.org/basics/reducers
import { combineReducers } from "redux";
import { questions } from "./questionsReducer";

const rootReducer = combineReducers({
  questions
});

export default rootReducer;
