 import React, { Component } from 'react';
 import Loginbutton from './loginbutton.js';
class LoginStatus extends Component{
    constructor(props){
        super(props);
    };
    
    render(){
        
    return (
    <div>
        <h3 class="mt-5 text-center">{this.props.data}</h3>
    </div>
    )
    }
}

export default LoginStatus;