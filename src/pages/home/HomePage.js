import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

function HomePage() {
    return (
        <section>
            HomePage
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
        // closeModal: actions.closeModal,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
