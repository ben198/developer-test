import React from 'react';
import Form from '../Form/Form';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <h1>Mubaloo Developer Test</h1>
                </header>
                <div className="container">
                    <Form/>
                </div>
                <footer className="footer">
                    <p>&copy;2016 Mubaloo</p>
                    {/* I read the instructions */}
                </footer>
            </div>
        );
    }
}