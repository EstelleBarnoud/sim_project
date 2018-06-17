import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
//import ChipForm from './ChipForm';

const styles = {
  submit: { 
    margin: 12
  },
  button: {
    marginTop: 15
  },
  goals: {
    marginLeft: -20 
  }
};

const validate = values => {
  const errors = {}
  const requiredFields = [
    'name',
    'themes',
    'description',
    'goal1'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Obligatoire'
    }
  })
  if (!values.goals || !values.goals.length) {
    errors.goals = {_error: 'Merci de vouloir indiquer au moins un objectif'}
  } else {
    const goalsArrayErrors = []
    values.goals.forEach((goal, goalIndex) => {
      const goalErrors = {}
      if (!goal) {
        goalErrors.goal = 'Obligatoire'
        goalsArrayErrors[goalIndex] = goalErrors.goal
      }
      if (values.goals.length > 3) {
        if (!goalErrors.goal) {
          goalErrors.goal = []
        }
        goalErrors._error = 'Merci de rentrer maximum 3 objectifs'
        goalsArrayErrors[goalIndex] = goalErrors
      }
    })
    if (goalsArrayErrors.length) {
      errors.goals = goalsArrayErrors
    }
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

// const renderChips = ({input: {key, label}, meta: {touched, error}, ...custom}) => (
//   <ChipForm
//     //hintText={label}
//     //floatingLabelText={label}
//     errorText={touched && error}
//     chipData={input}
//     {...input}
//     {...custom}
//   />
// )

const renderGoals = ({fields, meta: {error, submitFailed}}) => {
  let current_index = 1
  return (
    <ul style={styles.goals}>
      <li>
        <Field
          name="goal1"
          component={renderTextField}
          label="Objectif 1"
        />
      </li>
      {fields.map((goal, index) => {
        current_index += 1
        return(
          <li key={index}>
            <Field
              name={`goal${index + 2}`}
              component={renderTextField}
              label={` Objectif ${index + 2}`}
            />
            <IconButton tooltip="Supprimer" onClick={() => fields.remove(index)}>
              <Delete />
            </IconButton>
          </li>
      )})}
      <FlatButton style={styles.button} label="Ajouter un objectif" onClick={() => fields.push({})} disabled={current_index>2} />
    </ul>
  )
}

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
        <FieldArray name="goals" component={renderGoals} label="Objectifs" />
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
        <RaisedButton style={styles.submit} label="Créer le projet" primary={true} 
            type="submit" disabled={pristine || submitting} />
        <RaisedButton style={styles.submit} label="Effacer" primary={true}
            type="button" disabled={pristine || submitting} onClick={reset} />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'ProjectForm', // a unique identifier for this form
  validate
})(ProjectForm)
