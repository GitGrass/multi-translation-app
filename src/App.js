import React, { Component } from "react";
// import { Route, HashRouter, Navigate, Routes } from "react-router-dom";
import "./App.css";
import Result from "./components/Result";

class App extends Component {
  render() {
    return (
      // 一旦テキストベタ打ちで表示できるようにした
      <>
        <div className="App-body">
          <Result output="output test" />
        </div>
      </>

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
