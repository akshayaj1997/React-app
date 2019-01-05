import React from "react";
import Thead from "./thead";
import Tbody from "./tbody";

class Table extends React.Component {
    constructor() {
        super();
        this.values = [
            ['Tony Stark','Iron Man','Avengers'],
            ['Peter Parker','Spider Man','Avengers'],
            ['Barry Allen','The Flash','Justice League']
        ];
        this.headers = ['Name','Alias','Team'];
    }
    render() {
        return (
            <table>
                <Thead values = {this.headers}/>
                <Tbody values = {this.values}/>
            </table>
        )
    }
}

export default Table;

