import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {Button} from 'react-bootstrap'

import * as actions from '../../actions';

function LoginPage(props) {
    const username = 'admin';
    const password = '12345';
    return (
        <section>
            LoginPage
            <Button onClick={() => props.login({username, password})}>login</Button>
        </section>
    )
}

const mapStateToProps = (store) => {
    return {
        // isModalOpen: store.modal.isModalOpen
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        login: actions.auth,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
