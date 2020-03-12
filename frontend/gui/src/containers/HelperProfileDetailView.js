import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import HelperProfile from '../components/HelperProfile';

class HelperProfileDetail extends React.Component {
    constructor() {
        super();
        this.state = this.getInitialState();
        this.grabFromAPI = this.grabFromAPI.bind(this);
    }

    getInitialState() {
        return {
            profile: [],
            my_profile: [],
            is_my_profile: false
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
        if (!this.state.is_my_profile && Object.keys(this.state.my_profile).length > 0) {
            if (this.state.my_profile.pk === this.state.profile.user) {
                console.log(this.state.my_profile, this.state.profile.user);
                this.setState({ is_my_profile: true});
            }
        }
        if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div>
                <HelperProfile
                    profile={this.state.profile}
                    is_my_profile={this.state.is_my_profile}
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
  
export default connect(mapStateToProps)(HelperProfileDetail);