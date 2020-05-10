import React, { Component } from "react";
import { Route, Router } from "react-router-dom";

import Main from './pages/main/main';
import Startup from './pages/startup/screen';

class App extends React.Component {
    render() {
        return(
            <div>
                <Startup/>
            </div>
        );
    }
};

export default App;