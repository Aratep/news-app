import React, {useState, useEffect} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';
import './styles.scss'

function Header(props) {
    const {auth} = props;
    const currentUser = JSON.parse(localStorage.getItem("current_user"));
    // console.log(auth.user);
    const [userName, setUserName] = useState('guest');
    // const user = auth.user && Object.keys(auth.user).length === 0 && auth.user.constructor === Object ? auth.user.username : 'guest';

    useEffect(() => {
        // const currentUser = JSON.parse(localStorage.getItem("current_user"));
        currentUser && setUserName(currentUser.user.username)
    }, [userName, setUserName]);
    // const user = localStorage.getItem("auth_token") ? (auth.user.username || currentUser.user.username)  : 'guest';
    // const user =  (auth.user && Object.keys(auth.user).length === 0 && auth.user.constructor === Object)
    //     ? auth.user.username : !(auth.user && Object.keys(auth.user).length === 0 && auth.user.constructor === Object) ? currentUser.user.username  : 'guest';
    console.log(userName)

    return (
        <header>
            <Navbar bg="white" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/news">News</Link>
                        <div className="info">
                            <Nav.Link eventKey="disabled" disabled>
                            You are logged in as
                            </Nav.Link>
                            <NavDropdown title={userName} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => props.logOut()}>Log Out</NavDropdown.Item>
                            </NavDropdown>

                            {/*<Nav.Link eventKey="disabled" disabled>out</Nav.Link>*/}
                        </div>
                        {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                        {/*    <NavDropdown.Item>Action</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

const mapStateToProps = (store) => {
    return {
        auth: store.auth
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        logOut: actions.logOut,
        loginSuccess: actions.loginSuccess,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Header)
