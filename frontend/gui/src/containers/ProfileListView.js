import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Profiles from '../components/Profiles';

class ProfileList extends React.Component {
    constructor() {
        super();
        this.state = this.getInitialState();
        this.getInitialState = this.getInitialState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.grabFromAPI = this.grabFromAPI.bind(this);
    }

    getInitialState() {
        return {
            profiles: [],
            added_first_name: '',
            added_last_name: ''
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
        }
    }
    
    componentDidMount() {
        this.grabFromAPI();
    }

    componentDidUpdate() {
        // library that will let us compare entire objects
        let _ = require('lodash');
        // if user is logged out, we need to reset state back to initial (blank), if it isn't already blank
        if (!this.props.isAuthenticated && !_.isEqual(this.state, this.getInitialState())) {
            this.setState(this.getInitialState());
        }
        // this is so that profiles are reloaded when page is reloaded. we NEED _.isEqual so that this won't trigger an infinite loop
        if (this.props.token && _.isEqual(this.state, this.getInitialState())) {
            this.grabFromAPI();
        }
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
  