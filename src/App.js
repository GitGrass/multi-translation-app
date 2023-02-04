import React, { Component } from 'react';
// import { Route, HashRouter, Navigate, Routes } from "react-router-dom";
import './App.css';
import Result from './components/Result';
import Header from './components/Header';
import TranslateByDeepl from './features/api/Deepl';
import Input from './components/Input'

class App extends Component {
  render() {
    return (
      <div className="App-body">
        <Header />
        <Input />
        <Result
          searchText="message"
          targetLanguage="JA"
          function={TranslateByDeepl}
        />
        <Result
          searchText="hello"
          targetLanguage="JA"
          function={TranslateByDeepl}
        />
        <Result
          searchText="test"
          targetLanguage="JA"
          function={TranslateByDeepl}
        />
      </div>
    );
  }
}

export default App;
