import React from "react";

class Hello extends React.Component{
    //render is the main() function
    //render renders the items we need to render onto the user interface 
    render(){
        return <h1> <i>
              <center>Hello {this.props.name}</center>
               </i> </h1>
    }
}

export default Hello;