import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Home from './Home';

class App extends React.Component {
    render() {
        return(
            <div>
                <Home />
            </div>
        );
    }c
};

ReactDOM.render(<App />, document.querySelector('#root'));