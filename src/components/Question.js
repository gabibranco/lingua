import React from "react";
import questionsData from "./data/questions.json"

const Question = (props) => {
  return (
    <div className='question'>
      {props.text}
    </div >
  );
}

export default Question;