import React from 'react';

const Answer = (props) => {
  const answerOptions = props.data[0].options;
  const component = props.data[0].componentType;
  return (
    <div className='answers'>
      {
        answerOptions.map((answer) =>
          <button>{answer}</button>
        )
      }
    </div >
  );
}

export default Answer;