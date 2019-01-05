import React from "react";


class Form extends React.Component {
    
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            Name :props.Name,
            Alias :props.Alias,
            Team :props.Team,
        }
        this.onNameChange = this.onNameChange.bind(this)
        this.onAliasChange = this.onAliasChange.bind(this)
        this.onTeamChange = this.onTeamChange.bind(this)
    }

    onFormSubmit(event) {
        event.preventDefault()
        this.props.formSubmitCallback(
            this.state.Name,
            this.state.Alias,
            this.state.Team
        )
        this.props.history.push('/list')
    }

    onNameChange(event) {
        console.log(event.target.value)
        this.setState({Name: event.target.value});
    }

    onAliasChange(event) {
        console.log(event.target.value)
        this.setState({Alias: event.target.value});
    }

    onTeamChange(event) {
        console.log(event.target.value)
        this.setState({Team: event.target.value});
    }

    render() {
        return(
            <form onSubmit = {this.onFormSubmit}>
                <h3>Edit Details</h3>
                <label>
                     Name:
                     <input type="text" name="Name" onChange={this.onNameChange} />
                </label>
                <br/>
                <label>
                    Alias:
                    <input type="text" name="Alias" onChange={this.onAliasChange} />
                </label>
                <br/>
                <label>
                    Team:
                    <input type="text" name="Team" onChange={this.onTeamChange} />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
            
        )
    }

}

export default Form;