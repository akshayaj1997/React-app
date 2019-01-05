import React from "react";

import Column from "./column";

class Row extends React.Component {
    render() {
        const values = this.props.values;
        let renderCols = values.map((val,index) => 
        <Column key={index} isHeader={this.props.isHeader} value={val} />
        );
         return (<tr>{renderCols}</tr>);
    }
}

export default Row;