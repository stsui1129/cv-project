import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor () {
        super();

        this.state = {
            name: '',
            email: '',
            phone: '',
            isEdit: true
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePhoneChange(e) {
        this.setState({
            phone: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(state => ({
            isEdit: !state.isEdit
        }));
    }

    render() {
        const { name, email, phone } = this.state;

        if (this.state.isEdit) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Full Name:
                        <input type="text" value={name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Phone:
                        <input type="text" value={phone} onChange={this.handlePhoneChange} />
                    </label>
                    
                    <input type="submit" value="Submit" />
                </form>
            )
        }
        return (
             <div>
                 <div>Full Name: {name}</div>
                 <div>Email: {email}</div>
                 <div>Phone: {phone}</div>
                 <input type="button" value="Edit" onClick={this.handleSubmit} />
            </div>
        )
    }
}

export default GeneralInfo;