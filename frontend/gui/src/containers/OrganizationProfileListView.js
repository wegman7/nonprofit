import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import OrganizationProfiles from '../components/OrganizationProfiles';

class OrganizationProfileList extends React.Component {
    constructor() {
        super();
        this.state = this.getInitialState();
        this.getInitialState = this.getInitialState.bind(this);
        this.grabFromAPI = this.grabFromAPI.bind(this);
    }

    getInitialState() {
        return {
            profiles: [],
            organization_profiles: [],
            helper_profiles: []
        }
    }

    grabFromAPI() {
        if (this.props.token) {
            axios.get('http://127.0.0.1:8000/api/', {
                headers: {
                    Authorization: `Token ${this.props.token.token}`
                }
            })
                .then(response => {
                    this.setState({
                        'profiles': response.data,
                        'organization_profiles': response.data.filter(item => item.is_organization),
                        'helper_profiles': response.data.filter(item => !item.is_organization)
                    })
                })
            axios.get('http://127.0.0.1:8000/rest-auth/user/', {
                headers: {
                    Authorization: `Token ${this.props.token.token}`
                }
            })
        } else {
            axios.get('http://127.0.0.1:8000/api/')
                .then(response => {
                    this.setState({
                        'profiles': response.data,
                        'organization_profiles': response.data.filter(item => item.is_organization),
                        'helper_profiles': response.data.filter(item => !item.is_organization)
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
        // this is so that profiles are reloaded when page is reloaded. we NEED _.isEqual so that this won't trigger an infinite loop

        // i'm not sure if i need this.props.token
        // if (this.props.token && _.isEqual(this.state, this.getInitialState())) {
        if (_.isEqual(this.state, this.getInitialState())) {
            this.grabFromAPI();
        }
    }

    render() {
    
        return(
            <div>
                {/* <Profiles profiles={this.state.organization_profiles} title="Organizations" />
                <Profiles profiles={this.state.helper_profiles} title="Helpers" /> */}
                <OrganizationProfiles profiles={this.state.organization_profiles} />
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
  
  export default connect(mapStateToProps)(OrganizationProfileList);
