import React from 'react';
import styled from 'styled-components';
import { ReduxForm } from '../Forms/ReduxForm';
import { FormikForm } from '../Forms/FormikForm';

const FormWrapper = styled.div``;

export const Feedback = () => {
  return (
    <>
      <h1>Feedback</h1>
      <p>Please, send me your feedback. You can use any of these forms.</p>
      <FormWrapper>
        <ReduxForm></ReduxForm>
        <FormikForm></FormikForm>
      </FormWrapper>
    </>
  );
};
