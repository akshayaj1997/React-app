import React from "react";

class Column extends React.Component{
    render()
     {
         if(this.props.isHeader) {
             return (<th>{this.props.value}</th>);
         }
         return (<td> {this.props.value} </td>);
     }
}
export default Column;