// conditional changes must take place in the system or the website as a reaction to the changes
import React from "react";

class Child extends React.Component {
    render() {
         return (
             <div>
                 <span> The number is {this.props.count > 5 ? 'greater than' : this.props.count == 5 ? 'equal to' :'lesser than' } 5 </span>
             </div>
         )
    }
}

export default Child;