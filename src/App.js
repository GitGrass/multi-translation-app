import React, { Component } from 'react';
// import { Route, HashRouter, Navigate, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Result from './components/Result';
import DeeplTransrationContextProvider from './context/DeeplTransrationContext';
import InputContextProvider from './context/InputContext';
class App extends Component {
  render() {
    return (
      // 一旦テキストベタ打ちで表示できるようにした
      <InputContextProvider>
        <DeeplTransrationContextProvider>
          <div className="App-body">
            <Header />
            <Input />
            <Result />
          </div>
        </DeeplTransrationContextProvider>
      </InputContextProvider>

      // 以下のような実装イメージ
      // <HashRouter basename="/translator">
      //   <div className="App-body">
      //     <Routes>
      //       <Route exact path="/" render={() => <Navigate to="${firstViewPage}" />} />
      //       <Route path="/${outputLang}/${inputText}" render={() => <Result output={outputText} />} />
      //     </Routes>
      //   </div>
      // </HashRouter>
    );
  }
}

export default App;
