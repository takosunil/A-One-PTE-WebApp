import React, { useRef, useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import soundfile from "../../assets/audio/wfd1.mp3";

const QuestionPage = () => {
  const audioSource = useRef();

  const [wordCounter, setWordCounter] = useState(0);
  const transcriptAnswer = "Social policies describe the ways in which the society meets human's needs.";

  const [userAnswer, setUserAnswer] = useState("");
  const [showUserAnswer, setShowUserAnswer] = useState(false);
  const [userFormattedAnswerArray, setUserFormattedAnswerArray] = useState([]);
  const [percentage, setPercentage] = useState(0);

  const handleWordCount = e => {
    const longAnswer = e.target.value;

    const newLongAnswer = longAnswer.replace(/\n|\r/g, " ");
    const counter = newLongAnswer.split(" ");
    setUserAnswer(e.target.value);
    setWordCounter(counter.length);
  };

  const handleAnswerSubmit = () => {
    const transcriptAnswerArray = transcriptAnswer.split(" ");
    const userAnswerArray = userAnswer.split(" ");
    let correctWordCount = 0;
    const userAnswerObject = userAnswerArray.map((word, index) => {
      const isCorrect = transcriptAnswerArray[index] === word;
      if (isCorrect) {
        correctWordCount += 1;
      }
      return { index, word, isCorrect };
    });

    setPercentage(
      ((correctWordCount / transcriptAnswerArray.length) * 100).toFixed(2)
    );

    setUserFormattedAnswerArray(userAnswerObject);

    setShowUserAnswer(true);
  };

  return (
    <Grid>
      <h1>Question</h1>
      <Grid container direction="column" justify="center">
        <Grid className="audio-container">
          <audio
            autoPlay
            ref={audioSource}
            controls="controls"
            src={soundfile}
            controlsList="nodownload"
          />
        </Grid>
        <TextField
          className=""
          multiline
          rows={5}
          variant="outlined"
          onChange={handleWordCount}
          inputProps={{ spellCheck: "false" }}
        />
      </Grid>
      <Grid container className="question-control">
        <Grid container item justify="flex-start" xs={4}>
          <p className="word-counter">
            Word Count:
            {wordCounter}
          </p>
        </Grid>
        <Grid container item justify="center" xs={4}>
          <button
            type="button"
            className="btn btn--color-green"
            onClick={handleAnswerSubmit}
          >
            Submit
          </button>
        </Grid>
        <Grid container item justify="center" xs={4}>
          <button
            type="button"
            className="btn btn--color-blue"
            onClick={handleAnswerSubmit}
          >
            Try Again
          </button>
        </Grid>
      </Grid>
      {showUserAnswer && (
        <Grid container justify="flex-start">
          <Grid container className="answer-container">
            <Grid container item justify="flex-start" xs={2}>
              <p>Transcript:</p>
            </Grid>
            <Grid container item justify="flex-start" xs={10}>
              <p>{transcriptAnswer}</p>
            </Grid>
          </Grid>
          <Grid container className="answer-container">
            <Grid container item justify="flex-start" xs={2}>
              <p>Your Answer:</p>
            </Grid>
            <Grid container item justify="flex-start" xs={10}>
              <p>
                {userFormattedAnswerArray.length > 0 &&
                  userFormattedAnswerArray.map(answer => {
                    return (
                      <span
                        key={answer.index}
                        className={
                          answer.isCorrect !== true
                            ? `answer-container--word-red`
                            : ""
                        }
                      >
                        {` ${answer.word}`}
                      </span>
                    );
                  })}
              </p>
            </Grid>
          </Grid>
          <Grid container className="answer-container">
            <Grid container item justify="flex-start" xs={2}>
              <p>Your Score:</p>
            </Grid>
            <Grid container item justify="flex-start" xs={10}>
              <p>{`${percentage}%`}</p>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default QuestionPage;
