import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Header from './components/Header';
import TranslateByDeep from './features/api/DeepTranslate';
import TranslateByDeepl from './features/api/Deepl';
import TranslateByGoogle from './features/api/GoogleTranslate';
import Input from './components/Input';
import InputContextProvider from './context/InputContext';

class App extends Component {
  render() {
    return (
      <div className="App-body">
        <InputContextProvider>
          <Header />
          <Input />
          <div className="App-sub-title">
            <h2>Translation Result</h2>
            <p className="App-output-text-first">&#9656; DeepL</p>
            <Result function={TranslateByDeepl} />
            <p className="App-output-text">&#9656; Google</p>
            <Result function={TranslateByGoogle} />
            <p className="App-output-text">&#9656; Deep translate</p>
            <Result function={TranslateByDeep} />
          </div>
        </InputContextProvider>
      </div>
    );
  }
}

export default App;
