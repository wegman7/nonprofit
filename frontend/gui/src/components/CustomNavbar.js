import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import * as actions from '../store/actions/auth';

class CustomNavbar extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand><Link to="/" className="nav-item nav-link">Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-item nav-link align-self-sm-end">Organizations</Link>
                        <Link to="/contributors/" className="nav-item nav-link align-self-sm-end">Contributors</Link>
                    </Nav>
                    <Nav>
                        {
                            this.props.isAuthenticated ?

                            <button className="nav-item nav-link btn btn-link align-self-sm-end" onClick={this.props.logout}>Logout</button>

                            :

                            <Link to="/login/" className="nav-item nav-link align-self-sm-end">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
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