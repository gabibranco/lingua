import React from "react";
import questionsData from "./data/questions.json"
import Answer from "./Answer.js"

const Question = (props) => {

  return (
    <div>
      <div className='question'>
        {questionsData[0].text}
      </div>
      <div>
        < Answer data={questionsData} />
      </div>
    </div>
  );
}

export default Question;