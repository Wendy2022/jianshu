import React, { Component } from "react";
import Header from "./common/header";
import Home from "./common/pages/home";
import Detail from "./common/pages/detail"
import store from "./store";
//redux的provider把store里面的数据提供给header，第二步是用connect方法，把header和redux建立联系
import { Provider } from "react-redux";
//npm install react-touter组件
import { BrowserRouter, Route, Routes } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/detail' exact element={<Detail/>}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
