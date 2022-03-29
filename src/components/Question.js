import React from "react";
import questionsData from "./data/questions.json"

const Question = () => {
  return (
    <div className='question'>
      {
        questionsData.map((question) =>
          <p>
            {question.question}
          </p>
        )
      }
    </div>
  );
}

export default Question;