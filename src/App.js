import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Header from './components/Header';
import TranslateByDeepl from './features/api/Deepl';
import Input from './components/Input';
import InputContextProvider from './context/InputContext';

class App extends Component {
  render() {
    return (
      <div className="App-body">
        <InputContextProvider>
          <Header />
          <Input />
          <Result function={TranslateByDeepl} />
          <Result function={TranslateByDeepl} />
          <Result function={TranslateByDeepl} />
        </InputContextProvider>
      </div>
    );
  }
}

export default App;
