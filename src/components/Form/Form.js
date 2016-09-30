import React from 'react';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step1Complete: false,
            formSubmitted: false,
            title: '',
            name: '',
            dateOfBirth: '',
            currentLocation: '',
            currentDateAndTime: '',
            feedback: ''
        };
    }

    updateState(element, cb) {
        switch (element.name) {
            case 'title':
                this.setState({ title: element.value }, cb);
                break;
            case 'name':
                this.setState({ name: element.value }, cb);
                break;
            case 'dateOfBirth':
                this.setState({ dateOfBirth: element.value }, cb);
                break;
            case 'currentLocation':
                this.setState({ currentLocation: element.value }, cb);
                break;
            case 'currentDateAndTime':
                this.setState({ currentDateAndTime: element.value }, cb);
                break;
            case 'feedback':
                this.setState({ feedback: element.value }, cb);
                break;
        }
    }

    handleChange(e) {
        // Every time the user changes the value in a form input, that new value
        // is saved to the state property. If the title, name, and dob fields all
        // contain some value, then the 'step1Complete' flag will change to true
        // and the second part of the form will render
        this.updateState(e.target, () => {
            if (this.state.title && this.state.name && this.state.dateOfBirth) {
                this.setState({step1Complete: true});
            } else {
                this.setState({step1Complete: false});
            }
        });
    }

    renderFirstPart() {
        return (
            <div className="form-step form-step-1">
                <h3>Step 1</h3>
                <div>
                    <label>Title:</label>
                    <div className="inputContainer">
                        <select
                            name="title"
                            onChange={this.handleChange.bind(this)}>
                            <option></option>
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
                <h3>Step 2</h3>
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
                {this.state.step1Complete ? this.renderSecondPart() : null}
            </form>
        );
    }

}