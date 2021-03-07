import React from 'react';

import './App.css';
import {useQuestionData} from './useQuestionData';
import {QuestionDataContext} from './context';




function App() {
  const {state}=useQuestionData();

  return (
    <QuestionDataContext.Provider value={state}>
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    </QuestionDataContext.Provider>
  );
}

export default App;
