import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form, Button } from '../FormikForm';

const ReduxForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  console.log(props);
  return (
    <>
      <h1>Redux</h1>
      <Form onSubmit={handleSubmit}>
        <label>First name</label>
        <Field
          component="input"
          placeholder="First name"
          type="text"
          name="name"
        />
        {/* {errors.name && touched.name ? (
          <ErrorMessage>{errors.name}</ErrorMessage>
        ) : null} */}
        <label>Last name</label>
        <Field
          component="input"
          placeholder="Last name"
          type="text"
          name="surname"
        />
        {/* {errors.surname && touched.surname ? (
          <ErrorMessage>{errors.surname}</ErrorMessage>
        ) : null} */}
        <label>Phone</label>
        <Field
          component="input"
          placeholder="+7(999)999-99-99"
          type="text"
          name="phone"
        />
        {/* {errors.phone && touched.phone ? (
          <ErrorMessage>{errors.phone}</ErrorMessage>
        ) : null} */}
        <label>Email</label>
        <Field
          component="input"
          placeholder="Email"
          type="email"
          name="email"
        />
        {/* {errors.email && touched.email ? (
          <ErrorMessage>{errors.email}</ErrorMessage>
        ) : null} */}
        <label>Message</label>
        <Field
          component="textarea"
          rows="5"
          placeholder="Message"
          name="message"
        />
        {/* {errors.message && touched.message ? (
          <ErrorMessage>{errors.message}</ErrorMessage>
        ) : null} */}
        <Button type="submit" disabled={submitting}>
          Send
        </Button>
      </Form>
    </>
  );
};

const initialForm = {
  name: '',
  surname: '',
  phone: '',
  email: '',
  message: ''
};

const onSubmit = (values,dispatch) => {
  console.log(values)
}

export default reduxForm({
  form: 'feedback',
  onSubmit,
  initialValues: initialForm
})(ReduxForm);
