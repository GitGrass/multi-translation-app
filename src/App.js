import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Header from './components/Header';
import TranslateByDeepl from './features/api/Deepl';
import TranslateByGoogle from './features/api/GoogleTranslate';
import Input from './components/Input';
import InputContextProvider from './context/InputContext';
import TranslateByDeepTranslate from './features/api/DeepTranslate';
import ErrorBoundary from './components/ErrorBoundary';

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
            <ErrorBoundary>
              <Result function={TranslateByDeepl} />
            </ErrorBoundary>
            <p className="App-output-text">&#9656; Google</p>
            <ErrorBoundary>
              <Result function={TranslateByGoogle} />
            </ErrorBoundary>
            <p className="App-output-text">&#9656; Deep Translate</p>
            <ErrorBoundary>
              <Result function={TranslateByDeepTranslate} />
            </ErrorBoundary>
          </div>
        </InputContextProvider>
      </div>
    );
  }
}

export default App;
