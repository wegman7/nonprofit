import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import AddProfile from '../components/AddProfile';

class ProfileDetail extends React.Component {
    constructor() {
        super();
        this.state = this.getInitialState();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.grabFromAPI = this.grabFromAPI.bind(this);
    }

    getInitialState() {
        return {
            profile: []
        }
    }

    grabFromAPI() {
        const profileID = this.props.match.params.profileID;
        if (this.props.token) {
            axios.get(`http://127.0.0.1:8000/api/${profileID}/`, {
                headers: {
                    Authorization: `Token ${this.props.token.token}`
                }
            })
                .then(response => {
                    this.setState({
                        'profile': response.data
                    })
                })
        }
    }

    componentDidMount() {
        this.grabFromAPI();
    }

    componentDidUpdate() {
        // library that will let us compare entire objects
        let _ = require('lodash');
        // if user is logged out, we reroute them to the home page
        if (!this.props.isAuthenticated) {
            console.log('You are not logged in!');
            this.props.history.push('/');
        }
        // this is so that profiles are reloaded when page is reloaded. we NEED _.isEqual so that this won't trigger an infinite loop
        if (this.props.token && _.isEqual(this.state, this.getInitialState())) {
            this.grabFromAPI();
        }
    }

    handleSubmit(event) {
        const profileID = this.props.match.params.profileID;
        const first_name = event.target.added_first_name.value;
        const last_name = event.target.added_last_name.value;

        axios.put(
            `http://127.0.0.1:8000/api/${profileID}/`,
            {
                first_name: first_name,
                last_name: last_name,
                // user is taken care of on server side with request.user
            },
            {
                headers: { 'authorization': `Token ${this.props.token.token}`}
            }
        )
            .then(response => console.log(response))
            .catch(error => console.log(error))
            // event.preventDefault();
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

const mapStateToProps = state => {
    return {
      token: state.token,
      isAuthenticated: state.token !== null
    }
  }
  
export default connect(mapStateToProps)(ProfileDetail);