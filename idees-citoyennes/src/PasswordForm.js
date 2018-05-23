import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
  };
  
const validate = values => {
  const errors = {}
  const requiredFields = [
    'email'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Obligatoire'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Adresse mail non valide'
  }
  return errors
}

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const PasswordForm = props => {
  const {mySubmit, handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit(mySubmit)}>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <RaisedButton style={style} label="Envoyer un mail" primary={true} 
            type="submit" disabled={pristine || submitting} />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'PasswordForm', // a unique identifier for this form
  validate
})(PasswordForm)
