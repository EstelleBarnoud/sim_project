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
    'firstName',
    'lastName',
    'email'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Obligatoire'
    }
  })
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

const ProjectForm = props => {
  const {mySubmit, handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit(mySubmit)}>
      <div>
        <Field name="firstName" component={renderTextField} label="Prénom" />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Nom" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <RaisedButton style={style} label="Créer le projet" primary={true} 
            type="submit" disabled={pristine || submitting} />
        <RaisedButton style={style} label="Effacer" primary={true}
            type="button" disabled={pristine || submitting} onClick={reset} />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'ProjectForm', // a unique identifier for this form
  validate
})(ProjectForm)
