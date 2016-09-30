import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <form className="form" action="/submit-survey" method="post">
                <div>
                    <label for="title">Title:</label>
                    <div className="inputContainer">
                        <select id="title" name="user_title">
                            <option>Mr</option>
                            <option>Mrs</option>
                            <option>Master</option>
                            <option>Miss</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label for="name">Name:</label>
                    <div className="inputContainer">
                        <input
                            type="text"
                            id="name"
                            name="user_name"/>
                    </div>
                </div>
                <div>
                    <label for="dateOfBirth">Date of Birth:</label>
                    <div className="inputContainer">
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="user_dob"/>
                    </div>
                </div>
                <div>
                    <label for="currentLocation">Current Location:</label>
                    <div className="inputContainer">
                        <input
                            type="text"
                            id="currentLocation"
                            name="user_location"/>
                    </div>
                </div>
                <div>
                    <label for="currentDateAndTime">Current Date/Time:</label>
                    <div className="inputContainer">
                        <input
                            type="datetime-local"
                            id="currentDateAndTime"
                            name="user_dateAndTime"/>
                    </div>
                </div>
                <div>
                    <label for="feedback">User Feedback:</label>
                    <div className="inputContainer">
                        <textarea
                            id="feedback"
                            name="user_feedback">
                        </textarea>
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}