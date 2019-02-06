 import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App.js'
class Navbar extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){

    return (
    <Router>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <Link to ="/Tracker" class = "text-light nav-item">Tracker</Link>
      <Link to ="/Dashboard" class = "nav-item text-light">Dashboard</Link>
      <Link to ="/Trainers" class = "nav-item text-light">Trainers</Link>
      <Route path ="/Tracker" component = {App}/>  
       <Route  path ="/Dashboard" component = {App}/>  
        <Route  path ="/Trainers" component = {App}/>  
    </div>
  </nav>
  </Router>
    )
    }
}

export default Navbar;