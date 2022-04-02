import React from 'react';
import './App.css';
// import styled from 'styled-components';
import Header from './components/Header.js';
import Question from './components/Question.js';
import Welcome from './components/Welcome.js';



class App extends React.Component {
  render() {
    // let question = 'did you speak a language aside from English at home?'
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <Welcome />
          <Question />
        </div>
      </div>
    );
  }
}

export default App;
