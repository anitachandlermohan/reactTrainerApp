 import React, { Component } from 'react';
 import LoginStatus from './LoginStatus.js';
 import Loginbutton from './loginbutton.js'
 import './vendor/bootstrap/css/bootstrap.css'
class Loginform extends Component{
     constructor(){
        super();
         this.state = {
            loginstatus : "enter details to login"
         
        };
        this.updateLoginStatus = () =>{
            this.setState({loginstatus: "login details incorrect"});
          
        };  
        
};
    
    render(){
    return (
    <form class ="form-horizontal">
    <div id="loginform" >
            <div id="inputusername" class="form-group row">
                <div class = "col-md-12">
                <input type ="text" placeholder ="username" class="form-control"/>
            </div>
            </div>
            
            <div id = "inputpassword" class ="form-group row" >
                <div class ="col-sm-12">
                <input type = "password" placeholder = "password" class="form-control"/>
            </div>    
            </div>
           <button class ="btn btn-primary btn-block" type ="button" onClick={this.updateLoginStatus.bind(this)}>login</button>
            <LoginStatus data = {this.state.loginstatus}/>
                 
      </div>
    </form> 
   
        )
    }
}


export default Loginform;