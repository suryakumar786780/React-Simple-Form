import React, { Component } from 'react';

import { Signup } from './pages/signup';

import "./index.css";

export class App extends Component {
    render() {
        return (
            <div className='app-size'><Signup /></div>
        )
    }
}

export default App