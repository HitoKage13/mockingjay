import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './ContactForm.css';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', message: '' };

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event) {
        this.setState({ name: event.target.value });
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleMessage(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + '\n' + 'An email was submitted: ' + this.state.email + '\n' + 'A message was submitted: ' + this.state.message);
        this.setState({ name: '', email: '', message: '' });
        event.preventDefault();
    }

    render() {
        return (
            <div className="contact-container" >
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Name:
                        </label>
                        <input type="text" className="input-box" value={this.state.name} onChange={this.handleName} />
                    </div>
                    <div>
                        <label>
                            Email:
                        </label>
                        <input type="text" className="input-box" value={this.state.email} onChange={this.handleEmail} />
                        
                    </div>
                    <div>
                        <label>
                            Message:
                        </label>
                        <textarea type="text" className="message-box" value={this.state.message} onChange={this.handleMessage} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}