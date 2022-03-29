import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header.js';
import Question from './components/Question.js';
// import Welcome from './components/Welcome.js';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        {/* <Welcome /> */}
        <Question />
      </div>
    );
  }
}

export default App;
