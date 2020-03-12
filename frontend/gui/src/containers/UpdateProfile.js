import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import UpdateProfileForm from '../components/UpdateProfileForm';

class UpdateProfile extends React.Component {
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

            added_is_organization: false,
            added_first_name: [],
            added_last_name: [],
            added_area_of_expertise: [],
            added_cause_of_interest: [],
            added_organization_name: [],
            added_organization_info: [],
            added_type_of_help_needed: [],
            added_city: [],
            added_state: []
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
        // event.preventDefault();

        axios.put(
            `http://127.0.0.1:8000/api/${this.state.my_profile.pk}/`,
            {
                is_organization: this.state.added_is_organization,
                first_name: this.state.added_first_name.length > 0 ? this.state.added_first_name : null,
                last_name: this.state.added_last_name.length > 0 ? this.state.added_last_name : null,
                area_of_expertise: this.state.added_area_of_expertise.length > 0 ? this.state.added_area_of_expertise : null,
                cause_of_interest: this.state.added_cause_of_interest.length > 0 ? this.state.added_cause_of_interest : null,
                organization_name: this.state.added_organization_name.length > 0 ? this.state.added_organization_name : null,
                organization_info: this.state.added_organization_info.length > 0 ? this.state.added_organization_info : null,
                type_of_help_needed: this.state.added_type_of_help_needed.length > 0 ? this.state.added_type_of_help_needed: null,
                city: this.state.added_city.length > 0 ? this.state.added_city : null,
                state: this.state.added_state.length > 0 ? this.state.added_state : null,
                user: this.state.my_profile.pk
            },
            {
                headers: { 'authorization': `Token ${this.props.token.token}`}
            }
        )
            .then(response => console.log(response))
            .catch(error => console.log(error))
        if (this.state.added_is_organization) {
            this.props.history.push(`/profiles/${this.state.my_profile.pk}`);
        } else {
            this.props.history.push(`/contributors/profiles/${this.state.my_profile.pk}`);
        }
    }

    handleChange(event) {
        const target = event.target;

        let value;
        if (target.name === 'added_is_organization') {
            value = target.checked;
            // this.setState(this.getInitialState());
        } else {
            value = target.value;
        }

        // const value = target.name === 'added_is_organization' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        return(
            <div>
                <UpdateProfileForm
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    my_form={this.state.my_form}
                    handler={this.handler}

                    added_is_organization={this.state.added_is_organization}
                    added_first_name={this.state.added_first_name}
                    added_last_name={this.state.added_last_name}
                    added_area_of_expertise={this.state.added_area_of_expertise}
                    added_cause_of_interest={this.state.added_area_cause_of_interest}
                    added_organization_name={this.state.added_organization_name}
                    added_organization_info={this.state.added_organization_info}
                    added_type_of_help_needed={this.state.added_type_of_help_needed}
                    added_city={this.state.added_city}
                    added_state={this.state.added_state}
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
  
export default connect(mapStateToProps)(UpdateProfile);