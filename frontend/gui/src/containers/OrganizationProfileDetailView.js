import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import UpdateProfile from '../components/UpdateProfile';

class OrganizationProfileDetail extends React.Component {
    constructor() {
        super();
        this.state = this.getInitialState();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.grabFromAPI = this.grabFromAPI.bind(this);
    }

    getInitialState() {
        return {
            profile: [],
            my_profile: [],
            my_form: false,
            added_first_name: [],
            added_last_name: [],
            added_is_organization: false,
            added_organization_name: []
        }
    }

    grabFromAPI() {
        const profileID = this.props.match.params.profileID;
        // if we are authenticated we grab profile info, and user info
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
            axios.get('http://127.0.0.1:8000/rest-auth/user/', {
                headers: {
                    Authorization: `Token ${this.props.token.token}`
                }
            })
                .then(response => {
                    this.setState({
                        'my_profile': response.data
                    })
                })
        // if we are not authenticated we only grab profile info
        } else {
            axios.get(`http://127.0.0.1:8000/api/${profileID}/`)
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

    componentDidUpdate(prevProps) {
        // library that will let us compare entire objects
        let _ = require('lodash');
        // this is so that profiles are reloaded when page is reloaded. we NEED _.isEqual so that this won't trigger an infinite loop
        if (this.props.token && _.isEqual(this.state, this.getInitialState())) {
            this.grabFromAPI();
        }
        if (!this.state.my_form) {
            if (this.state.my_profile.length !== 0) {
                let is_my_form_true = this.state.my_profile.pk === this.state.profile.user;
                if (is_my_form_true) {this.setState({ my_form: is_my_form_true}) }
            }
        }
        if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    handleSubmit(event) {
        const profileID = this.props.match.params.profileID;
        const first_name = this.state.added_first_name;
        const last_name = this.state.added_last_name;
        const is_organization = this.state.added_is_organization;
        let organization_name = this.state.added_organization;

        if (this.state.added_organization_name.length === 0) { 
            organization_name = null;
        }

        const user = this.state.my_profile.pk;

        axios.put(
            `http://127.0.0.1:8000/api/${profileID}/`,
            {
                first_name: first_name,
                last_name: last_name,
                is_organization: is_organization,
                organization_name: organization_name,
                user: user
            },
            {
                headers: { 'authorization': `Token ${this.props.token.token}`}
            }
        )
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    handleChange(event) {
        const target = event.target;
        const value = target.name === 'added_is_organization' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        return(
            <div>
                    <UpdateProfile first_name={this.state.profile.first_name}
                        last_name={this.state.profile.last_name}
                        is_organization={this.state.profile.is_organization}
                        organization_name={this.state.profile.organization_name}
                        username={this.state.profile.username}
                        my_form={this.state.my_form}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        added_first_name={this.state.added_first_name}
                        added_last_name={this.state.added_last_name}
                        added_is_organization={this.state.added_is_organization}

                    />
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
  
export default connect(mapStateToProps)(OrganizationProfileDetail);