import React, { Component } from 'react';
// import { Route, HashRouter, Navigate, Routes } from "react-router-dom";
import './App.css';
import Result from './components/Result';
import Header from './components/Header';
import DeeplTransrationContextProvider from './context/DeeplTransrationContext';

class App extends Component {
  render() {
    return (
      // 一旦テキストベタ打ちで表示できるようにした
      <DeeplTransrationContextProvider>
        <div className="App-body">
          <Header />
          <Result searchText="output test" targetLanguage="JA" />
        </div>
      </DeeplTransrationContextProvider>

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
