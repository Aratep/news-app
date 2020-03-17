import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

function NewsPage() {
    return (
        <section>
            NewsPage
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)
