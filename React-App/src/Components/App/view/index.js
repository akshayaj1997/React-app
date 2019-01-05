import React from "react";
import Form from "../form/index"
//import Edit from "../edit";

class View extends React.Component {
    render() {
        return(
            <section>
                <h3>View Detail</h3>
                <div> Name : {this.props.Name} </div>
                <div> Alias : {this.props.Alias} </div>
                <div> Team: {this.props.Team} </div>
                <br/>
                
            </section>

            
        )
    }

}
export default View;
/*actually supposede to be in line 14 but only for debugging
<Form formSubmitCallback={(Name,Alias,Team) => {console.log(Name,Alias,Team)}}/>
*/