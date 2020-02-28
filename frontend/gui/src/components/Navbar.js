import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../store/actions/auth';

class Navbar extends Component {

    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                {
                    this.props.isAuthenticated ?

                    <button onClick={this.props.logout}>Logout</button>

                    :
                    
                    <Link to="/login/">Login</Link>
                    
                }
            </nav>
        )
            }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Navbar);