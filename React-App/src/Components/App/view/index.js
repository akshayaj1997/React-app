import React from "react";
//import Parent from "./parent";

class View extends React.Component {
    render() {
        return(
            <section>
                <h3>View Detail</h3>
                <div> Name : {this.props.Name} </div>
                <div> Alias : {this.props.Alias} </div>
                <div> Team: {this.props.Team} </div>
            </section>
            
        )
    }

}

export default View;