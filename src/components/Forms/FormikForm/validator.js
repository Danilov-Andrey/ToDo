export const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.surname) {
    errors.surname = 'Required';
  } else if (values.surname.length > 20) {
    errors.surname = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/i.test(values.phone)) {
    errors.phone = 'Invalid phone';
  }

  if (!values.message || values.message.trim().length === 0) {
    errors.message = 'Required';
  }

  return errors;
};
