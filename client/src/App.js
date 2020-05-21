import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Main from "./pages/main/main";
import Landing from "./pages/landing/screen";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/main" component={Main} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
