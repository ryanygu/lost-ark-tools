import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '@/_services';

function Login({ history, location }) {
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    function onSubmit({ email, password }, { setSubmitting }) {
        alertService.clear();
        accountService.login(email, password)
            .then(() => {
                // const { from } = location.state || { from: { pathname: "/home" } };
                // history.push(from);
                history.push('/dashboard')
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                
                <Form>
                    <h1 className="text-center">Login</h1>
                    <div className="card-body" id="login">
                        <div className="form-row mb-3">
                            <label>Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-row mb-3">
                            <label>Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group row mb-3 justify-content-between">
                            <div className="form-group col-4">
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary px-3 rounded-pill">
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Login
                                </button>
                            </div>
                            <div className="form-group col-4 text-end">
                                <Link to="register" className="btn btn-link">Register</Link>
                            </div>
                        </div>
                        <div className="form-group row text-center">
                            <Link to="forgot-password" className="btn btn-link pr-0">Forgot Password?</Link>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export { Login }; 