import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            isEditOn: false
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
            isEditOn: !state.isEditOn
        }));
    }

    render() {
        const { name, email, phone } = this.state;

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
                {/* <input type="button" value="Edit" /> */}
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default GeneralInfo;