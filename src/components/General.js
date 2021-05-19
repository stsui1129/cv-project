import React, { Component } from "react";

class General extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            isEditOn: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value,
            email: e.target.value,
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
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Full Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Email:
                    <input type="text" value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                    Phone:
                    <input type="text" value={this.state.phone} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default General;