import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as actions from '../../actions';
import withUserName from "../hoc/withUserName";
import './styles.scss'

function Header(props) {
    return (
        <header>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="bg-white" style={{zIndex: 10}}>
                    <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/news">News</Link>
                        <div className="info">
                            <Nav.Link eventKey="disabled" disabled>
                                You are logged in as
                            </Nav.Link>
                            <NavDropdown
                                title={props.auth.user.username || props.username}
                                id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => props.logOut()}>Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

const mapStateToProps = (store) => {
    return {auth: store.auth}
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        logOut: actions.logOut,
        loginSuccess: actions.loginSuccess,
    }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(withUserName(Header))
