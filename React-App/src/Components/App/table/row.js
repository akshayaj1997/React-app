import React from "react";

import Column from "./column";

class Row extends React.Component {

    constructor(props) {
        super(props);
        this.onViewClick = this.onViewClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
    }
    onEditClick() {
        console.log(this.props.values);
        const ID = this.props.values[0];
        this.props.onEditClick(ID);
    }
    onViewClick() {
        console.log(this.props.values);
        const ID = this.props.values[0];
        this.props.onViewClick(ID);
    }
    render() {
        const values = this.props.values;
        let renderCols = values.map((val,index) => 
        <Column key={index} isHeader={this.props.isHeader}>{val}</Column>
        );

        let actionButton,editButton;
        if(this.props.isHeader) {
           actionButton = (<Column isHeader={this.props.isHeader}> Action </Column>);
           editButton = (<Column isHeader={this.props.isHeader}> Edit </Column>);
        }
        else {
            actionButton = (<Column isHeader={this.props.isHeader}> 
                             <button onClick={this.onViewClick}> View </button>
                            </Column>);
            editButton = (<Column isHeader={this.props.isHeader}> 
                <button onClick={this.onEditClick}> Edit </button>
               </Column>);
        }
         return (<tr>{renderCols}{actionButton}{editButton}</tr>);
    }
}

export default Row;