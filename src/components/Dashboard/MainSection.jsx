import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { questionActions } from "../../actions/question-actions";

const MainSection = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const questionData = useSelector(state => state.questions);
  const value = queryString.parse(history.location.search);

  console.log("value: ", value);
  const handleQuestionClick = question => {
    history.push({
      pathname: `/question/wfd`,
      search: `?id=${question.id}`
    });
  };

  useEffect(() => {
    dispatch(questionActions.getAllQuestion());
  }, []);

  return (
    <div>
      {questionData.isLoading ? (
        <p>Loading...</p>
      ) : (
        <Grid>
          <h1>Questions</h1>
          {questionData.questions &&
            questionData.questions.data.map(question => {
              return (
                <Grid
                  key={question.id}
                  container
                  cols={12}
                  justify="flex-start"
                >
                  <Grid className="question-row">
                    <Grid container justify="flex-start">
                      <h3>{question.question}</h3>
                    </Grid>
                    <Grid container justify="flex-end">
                      <button
                        type="button"
                        onClick={() => handleQuestionClick(question)}
                        className="btn"
                      >
                        Practice
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      )}
    </div>
  );
};

export default MainSection;
