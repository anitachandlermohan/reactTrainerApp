import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './helloWorld.js';
import Header from './header.js'
import Loginform from './loginform.js'
import LoginStatus from './LoginStatus.js'
import Navbar from './navbar.js'
import Loginbutton from './loginbutton.js'
import './vendor/bootstrap/css/bootstrap.css'
class App extends Component {
  constructor(){
        super();
       
  }
  render(){
    return (
    <div>
    <div>
    <Navbar/>
      </div>
    
    <Header />
    <body>
      <div class="row">
      <div class ="col-md-4">
      </div> 
      <div class = "col-md-4">
        <section class = "container">
          <Loginform onSubmit = {this.updateLoginStatus}/>
        </section>
     </div>
     <div class ="col-md-4">
      </div>
      </div>

    </body>
   </div>
    );
  }
}


export default App;
