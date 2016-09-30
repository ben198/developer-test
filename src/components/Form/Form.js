import React from 'react';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.step1Complete = false;
        this.formSubmitted = false;
        this.state = {
            title: '',
            name: '',
            dateOfBirth: '',
            currentLocation: '',
            currentDateAndTime: '',
            feedback: ''
        };
    }

    handleChange(e) {
        switch (e.target.name) {
            case 'title':
                this.setState({ title: e.target.value });
                break;
            case 'name':
                this.setState({ name: e.target.value });
                break;
            case 'dateOfBirth':
                this.setState({ dateOfBirth: e.target.value });
                break;
            case 'currentLocation':
                this.setState({ currentLocation: e.target.value });
                break;
            case 'currentDateAndTime':
                this.setState({ currentDateAndTime: e.target.value });
                break;
            case 'feedback':
                this.setState({ feedback: e.target.value });
                break;
        }
    }

    renderFirstPart() {
        return (
            <div className="form-step form-step-1">
                <div>
                    <label>Title:</label>
                    <div className="inputContainer">
                        <select
                            name="title"
                            onChange={this.handleChange.bind(this)}>
                            <option>Mr</option>
                            <option>Mrs</option>
                            <option>Master</option>
                            <option>Miss</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label>Name:</label>
                    <div className="inputContainer">
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <div className="inputContainer">
                        <input
                            type="date"
                            name="dateOfBirth"
                            onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }

    renderSecondPart() {
        return(
            <div className="form-step form-step-2">
                <div>
                    <label>Current Location:</label>
                    <div className="inputContainer">
                        <input
                            type="text"
                            name="currentLocation"
                            onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                <div>
                    <label>Current Date/Time:</label>
                    <div className="inputContainer">
                        <input
                            type="datetime-local"
                            name="currentDateAndTime"
                            onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                <div>
                    <label>User Feedback:</label>
                    <div className="inputContainer">
                        <textarea
                            name="feedback"
                            onChange={this.handleChange.bind(this)}>
                        </textarea>
                    </div>
                </div>
                <div>
                    <button type="button">Submit</button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <form className="form">
                {this.renderFirstPart()}
                {this.step1Complete ? this.renderSecondPart() : null}
            </form>
        );
    }

}