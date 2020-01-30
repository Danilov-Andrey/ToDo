import React from 'react';
import { ErrorMessage } from '../ErrorMessage';

export const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export const renderTextarea = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <>
    <textarea rows="5" {...input} placeholder={label} type={type} />
    {touched && error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);
