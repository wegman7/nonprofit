import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import * as actions from '../store/actions/auth';

class CustomNavbar extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
                <Nav>
                    <Link to="/" className="nav-item nav-link">Home</Link>
                </Nav>
                <div className="navbar-nav mr-auto"></div>
                <div className="navbar-nav">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            {
                                this.props.isAuthenticated ?

                                <button  className="nav-item nav-link btn btn-link" onClick={this.props.logout}>Logout</button>

                                :

                                <Link to="/login/" className="nav-item nav-link">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(CustomNavbar);