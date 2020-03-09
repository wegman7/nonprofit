import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Profiles from '../components/Profiles';

class ProfileList extends React.Component {
    constructor() {
        super();
        this.state = this.getInitialState();
        this.getInitialState = this.getInitialState.bind(this);
        this.grabFromAPI = this.grabFromAPI.bind(this);
    }

    getInitialState() {
        return {
            profiles: []
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
                        'profiles': response.data
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
                        'profiles': response.data
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
        if (this.props.token && _.isEqual(this.state, this.getInitialState())) {
            this.grabFromAPI();
        }
    }

    render() {
        return(
            <div>
                <Profiles profiles={this.state.profiles} />
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
  
  export default connect(mapStateToProps)(ProfileList);
