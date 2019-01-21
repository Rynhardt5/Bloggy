import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';

const renderInput = ({ input, label, type, meta: { touched, error } }) => (
  <Form.Field error={touched && (error && true)}>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} />
    {touched && (error && <span>{error}</span>)}
  </Form.Field>
);

const PostForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <Form onSubmit={handleSubmit(formProps => props.onSubmit(formProps))}>
      <Field name="title" type="text" component={renderInput} label="Title" />
      <Field name="body" type="text" component={renderInput} label="Content" />
      <Button disabled={pristine || submitting} primary type="submit">
        {props.btnText}
      </Button>
    </Form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.body) {
    errors.body = 'Required';
  }

  return errors;
};

export default reduxForm({
  form: 'postForm',
  validate
})(PostForm);
