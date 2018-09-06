import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from './Admin';
import Survey from './Survey';
import ThankYou from './thankyou';

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/admin"></Link>
                        <Route exact path="/admin" component={Admin} />
                        <Link to="/"></Link>
                        <Route exact path="/" component={Login} />
                        <Link to="/survey"></Link>
                        <Route exact path="/survey" component={Survey} /> 
                        <Link to="/thankyou"></Link>
                        <Route exact path="/thankyou" component={ThankYou} /> 
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;