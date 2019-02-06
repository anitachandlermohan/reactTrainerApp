 import React, { Component } from 'react';
 import './vendor/bootstrap/css/bootstrap.css'
class Header extends Component{
    render(){
       
    return (
    <section id="header">
        <div class="row">
            <div class = "col-md-4">
            </div>
           <div class = "col-md-4"> 
              
                <h1 class="mt-5 text-center">{this.props.headerProp}</h1>
            </div>
        <div class = "col-md-4"> 
        </div>
    </div>

    </section>
    )
    }
}
Header.defaultProps = {
    headerProp :" Login to your dashboard!"
}

export default Header;