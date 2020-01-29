import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { ErrorMessage } from '../ErrorMessage';
import { validate } from './validator';

const Button = styled.button`
  background-color: #bc2c3d;
  border: none;
  padding: 10px;
  border-radius: 10px;
  color: #f8f3e6;
  font-size: 16px;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #bd4452;
  }
  &:active {
    transition: all 0.2s ease-in-out;
    transform: scale(0.95);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  input {
    margin: 10px 0;
  }
  button {
    margin: 16px 0;
  }
  textarea {
    margin: 10px 0;
    resize: none;
    font-family: inherit;
  }
`;

const initialForm = {
  name: '',
  surname: '',
  phone: '',
  email: '',
  message: ''
};

export const FormikForm = () => {
  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };

  return (
    <>
      <h1>FormikForm</h1>
      <Formik
        initialValues={initialForm}
        onSubmit={onSubmit}
        validate={validate}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <Form onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <ErrorMessage>{errors.name}</ErrorMessage>
            ) : null}
            <input
              placeholder="Surname"
              type="text"
              name="surname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.surname}
            />
            {errors.surname && touched.surname ? (
              <ErrorMessage>{errors.surname}</ErrorMessage>
            ) : null}
            <input
              placeholder="+7(999)999-99-99"
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.phone && touched.phone ? (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            ) : null}
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <ErrorMessage>{errors.email}</ErrorMessage>
            ) : null}
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message ? (
              <ErrorMessage>{errors.message}</ErrorMessage>
            ) : null}
            <Button type="submit" disabled={isSubmitting}>
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
