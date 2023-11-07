import React, { Component } from 'react';
import App from "./App"

class AddCounter extends Component {
    render() {
        return (
            <div>
                 <button  > <App /></button>
                 <button onClick={() => <App/>} > </button>
            </div>
        );
    }
}

export default AddCounter;

