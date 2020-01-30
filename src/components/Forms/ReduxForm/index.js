import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { Form, Button } from '../FormikForm';
import { renderInput, renderTextarea } from './fields';
import { validate } from '../Validator';
import PropTypes from 'prop-types';

const ReduxForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <>
      <h1>ReduxForm</h1>
      <Form onSubmit={handleSubmit}>
        <label>First name</label>
        <Field
          component={renderInput}
          label="First name"
          type="text"
          name="name"
        />

        <label>Last name</label>
        <Field
          component={renderInput}
          label="Last name"
          type="text"
          name="surname"
        />

        <label>Phone</label>
        <Field
          component={renderInput}
          label="+7(999)999-99-99"
          type="text"
          name="phone"
        />

        <label>Email</label>
        <Field
          component={renderInput}
          label="Email"
          type="email"
          name="email"
        />

        <label>Message</label>
        <Field component={renderTextarea} label="Message" name="message" />

        <Button type="submit" disabled={submitting}>
          Send
        </Button>
      </Form>
    </>
  );
};

ReduxForm.propTypes = {
  props: PropTypes.object.isRequired
};

const initialForm = {
  name: '',
  surname: '',
  phone: '',
  email: '',
  message: ''
};

const onSubmit = (values, dispatch) => {
  window.alert(JSON.stringify(values, 2, 1));
  dispatch(reset('feedback'));
};

export default reduxForm({
  form: 'feedback',
  onSubmit,
  validate,
  initialValues: initialForm
})(ReduxForm);
