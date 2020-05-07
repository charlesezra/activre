import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Main from './pages/main/Main';

class App extends React.Component {
    render() {
        return(
            <div>
                <Main />
            </div>
        );
    }c
};

ReactDOM.render(<App />, document.querySelector('#root'));