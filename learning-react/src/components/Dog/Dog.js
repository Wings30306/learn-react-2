import React, { Component } from 'react';
import './Dog.css';
import smilingdog from './dog.jpg';

class Dog extends Component {
    render() {
        return (
            <div className="Dog">
                <p className="Dog-sound">WHOOF</p>
                <img src={smilingdog} alt="Smiling dog"/>
            </div>
        )
    }
}

export default Dog;