import React from "react";//no path coz from node modules
import Table from "./table/index";//path coz we need relative path
//import Incrementer from "./incrementer/index" // This is for incrementer
import View from "./view/index";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

const tableValues = [
    ['101','Tony Stark','Iron Man','Avengers'],
    ['102','Peter Parker','Spider Man','Avengers'],
    ['103','Barry Allen','The Flash','Justice League']
];
const tableHeaders = ['ID','Name','Alias','Team'];
//const tableHeadersSecond = ['Name-2','Alias-2','Team-2'];  

class App extends React.Component {

    state = {
        selectedId: -1, 
        selectedRecord: {}
    }

   /* constructor(props) {
        super(props);
        this.onViewClick = this.onViewClick.bind(this)
    }

    onViewClick(id) {
        console.log(id);
        const data = tableValues.find(val => val[0] === id)
        const newRecord = {
            Name: data[1],
            Alias: data[2],
            Team: data[3]
        }
        this.setState({ selectedId:id, selectedRecord: newRecord })
    }*/
    render() {
        return(
            //<Hello name= "World"></Hello>
            //<Incrementer/>
            <Router>
                <Switch>
                    <Route exact path="/list" render={(props) => {
                        return (<Table 
                                    values={tableValues} 
                                    headers={tableHeaders}
                                    history = {props.history} 
                                    //onViewClick={this.onViewClick}  
                        />)
                    }}/>
                    <Route exact path="/view/:id" render={(props) => {
                        console.log(props)
                        const data = tableValues.find(val => val[0] === props.match.params.id)
                        const newRecord = {
                            Name: data[1],
                            Alias: data[2],
                            Team: data[3]
                        
                        }
                        return (<View 
                                    Name={newRecord.Name} 
                                    Alias={newRecord.Alias} 
                                    Team={newRecord.Team}
                            />)
                    }}/>
                    <Redirect to="/list" />
                </Switch>
                </Router>
        )
    }
}


export default App;
