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
        <Field name="name" component={renderTextField} label="Nom du projet" />
      </div>
      <div>
        <Field name="photo" component={renderTextField} label="Photo" />
      </div>
      <div>
        <Field name="themes" component={renderTextField} label="Thèmes" />
      </div>
      <div>
        <Field name="goals" component={renderTextField} label="Objectifs" />
      </div>
      <div>
        <Field name="description" component={renderTextField} label="Descriptif" multiLine={true} />
      </div>
      <div>
        <Field name="steps" component={renderTextField} label="Etapes" />
      </div>
      <div>
        <Field name="links" component={renderTextField} label="Sources" />
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
