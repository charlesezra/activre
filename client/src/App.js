import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Landing from "./pages/landing/screen";
import Main from "./pages/main/main";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Main} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
