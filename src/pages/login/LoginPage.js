import React from 'react';
import {Button, Form, Spinner} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions';
import validateFields from "../../helpers/validateFields";
import useFormValidation from "../../helpers/useFormValidation";
import './styles.scss'

function LoginPage(props) {
    const {error, loading} = props.auth;

    const INIT_STATE = {
        username: "",
        password: "",
    };

    const onFormSubmit = async () => {
        const {username, password} = values;
        props.login({username, password});

    };

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(INIT_STATE, validateFields, onFormSubmit);

    return (
        <section className='login-form'>
            <Form onSubmit={handleSubmit}>
                <h3>Login to your Web App</h3>
                {error && <span className="error-message">{error}</span>}
                <div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            onChange={handleChange}
                            value={values.username}
                            onBlur={handleBlur}
                            name="username"
                            isInvalid={!!errors.username}
                        />
                        <Form.Text className="error-message" style={{textAlign: 'left'}}>
                            {errors.username}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            name="password"
                            isInvalid={!!errors.password}
                        />
                        <Form.Text className="error-message" style={{textAlign: 'left'}}>
                            {errors.password}
                        </Form.Text>
                    </Form.Group>
                    <Button
                        disabled={isSubmitting}
                        variant="primary"
                        type="submit"
                    >
                        Submit
                        {
                            loading &&  <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        }
                    </Button>
                </div>
            </Form>
        </section>
    )
}

const mapStateToProps = (store) => {
    return {
        auth: store.auth
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        login: actions.login,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

