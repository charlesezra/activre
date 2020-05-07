import React from 'react';
import './Home.css';

const HeaderTemplate = () => (
    <div>
        <div></div>
    </div>
);

class Home extends React.Component{
    render(){
        return(
            <div>
                <section id="header"><HeaderTemplate /></section>
            </div>          
        );
    }
};

export default Home;