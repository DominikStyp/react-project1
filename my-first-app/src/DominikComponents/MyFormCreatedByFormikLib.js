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
        // https://github.com/jquense/yup
        let yup = require('yup');
        return yup.object().shape({
            email: yup
                .string()
                .email()
                .required(),
            age: yup
                .number('Age must be a number')
                .positive('You cant have negative number as age')
                .integer('Age must be integer number')
                .required(),
            password: yup.string()
                .min(10, "Your password is not strong enough (at least 10 chars required")
                .matches(/[A-Z]+/, { message: 'At least 1 big letter in password required' })
                .matches(/[a-z]+/, { message: 'At least 1 small letter in password required' })
                .matches(/[0-9]+/, { message: 'At least 1 number character in password required' })
                .required(),
            username: yup.string()
                .min(2, "Username too short! Min 2 chars required")
                .max(50, "Username too long! Max 50 chars allowed")
                .required(),
            interests: yup.array()
                .min(2, "At least 2 interest is required")
                .required()
        });
    }

    render() {
        // https://jaredpalmer.com/formik/docs/guides/validation
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
                        Username: <Field type="username" name="username" /><br />
                        <ErrorMessage name="username" component="div" />
                        Password: <Field type="password" name="password" /><br />
                        <ErrorMessage name="password" component="div" />
                        Age: <Field type="age" name="age" /><br />
                        <ErrorMessage name="age" component="div" />
                        Interests:
                        <Field as="select" style={{height: "100px"}} name="interests" multiple="multiple">
                            <option value="it">IT</option>
                            <option value="sports">Sports</option>
                            <option value="education">Education</option>
                            <option value="politics">Politics</option>
                            <option value="travel">Travel</option>
                        </Field>
                        <br />
                        <ErrorMessage name="interests" component="div" />
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