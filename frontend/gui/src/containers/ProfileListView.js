import React from 'react';
import axios from 'axios';

import Profiles from '../components/Profiles';
import AddProfile from '../components/AddProfile';

class ProfileList extends React.Component {
    constructor() {
        super();
        this.state = {
            profiles: [],
            added_first_name: '',
            added_last_name: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(response => {
                this.setState({
                    'profiles': response.data
                })
            })
    }

    handleSubmit(event) {
        // event.preventDefault();
        const first_name = event.target.added_first_name.value;
        const last_name = event.target.added_last_name.value;

        axios.post('http://127.0.0.1:8000/api/', {
            first_name: first_name,
            last_name: last_name
            })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <div>
                <Profiles profiles={this.state.profiles} />
                <AddProfile handleSubmit={this.handleSubmit} handleChange={this.handleChange} added_first_name={this.state.added_first_name} added_last_name={this.state.added_last_name} />
            </div>
        )
    }
}

export default ProfileList;