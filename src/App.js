
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sample from "./salaryDetails";
import './App.css';


class App extends Component {
  render () {
   
  
    return (
      <Router>
        <Route path="/" component={Sample} exact />
        </Router>
    );
    };
}
export default App;
