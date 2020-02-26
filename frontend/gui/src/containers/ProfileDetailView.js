import React from 'react';
import axios from 'axios';

import AddProfile from '../components/AddProfile';

class ProfileDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            'profile': []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const profileID = this.props.match.params.profileID;
        axios.get(`http://127.0.0.1:8000/api/${profileID}/`)
            .then(response => {
                this.setState({
                    'profile': response.data
                })
            })
    }

    handleSubmit(event) {
        const profileID = this.props.match.params.profileID;
        const first_name = event.target.added_first_name.value;
        const last_name = event.target.added_last_name.value;

        axios.put(`http://127.0.0.1:8000/api/${profileID}/`, {
            first_name: first_name,
            last_name: last_name
            })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    handleDelete(event) {
        const profileID = this.props.match.params.profileID;
        axios.delete(`http://127.0.0.1:8000/api/${profileID}/`);
        this.props.history.push('/');
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <div>
                {this.state.profile.first_name} {this.state.profile.last_name}
                <AddProfile handleSubmit={this.handleSubmit} handleChange={this.handleChange} added_first_name={this.state.added_first_name} added_last_name={this.state.added_last_name} />
                <form onSubmit={this.handleDelete}>
                    <input type="submit" value="Delete" />
                </form>
            </div>
        )
    }
}

export default ProfileDetail;