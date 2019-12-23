import React from "react";
// for creating a form
import {ErrorMessage, Field, Form, Formik} from 'formik';
// for validation
import yup from 'yup'; // for only what you need

class MyFormCreatedByFormikLib extends React.Component {
    constructor(props) {
        super(props);
    }

    getValidationSchema(){
        let yup = require('yup');
        return yup.object().shape({
            email: yup.string().required().email(),
            age: yup.number().positive().integer().required(),
            password: yup.string().required()
        });
    }

    render() {
        return (
            <Formik
                initialValues={{ email: '', password: '', age: 25 }}
                validationSchema={this.getValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        Email: <Field type="email" name="email" /><br />
                        <ErrorMessage name="email" component="div" />
                        Password: <Field type="password" name="password" /><br />
                        <ErrorMessage name="password" component="div" />
                        Age: <Field type="age" name="age" /><br />
                        <ErrorMessage name="age" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default MyFormCreatedByFormikLib