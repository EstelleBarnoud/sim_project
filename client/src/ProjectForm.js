import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
//import ChipForm from './ChipForm';
import FileInput from './FileInput.js';

const styles = {
  submit: { 
    margin: 12
  },
  button: {
    marginTop: 15
  },
  list: {
    marginLeft: -20 
  }
};

const validate = values => {
  const errors = {}
  const requiredFields = [
    'name',
    'theme1',
    'description',
    'goal1',
    'step1'
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

const renderThemes = ({fields, meta: {error, submitFailed}}) => {
  let current_index = 1
  return (
    <ul style={styles.list}>
      <li>
        <Field
          name="theme1"
          component={renderTextField}
          label="Thème"
        />
      </li>
      {fields.map((theme, index) => {
        current_index += 1
        return(
          <li key={index}>
            <Field
              name={`theme${index + 2}`}
              component={renderTextField}
              label={` Thème ${index + 2}`}
            />
            <IconButton tooltip="Supprimer" onClick={() => fields.remove(index)}>
              <Delete />
            </IconButton>
          </li>
      )})}
      <FlatButton style={styles.button} label="Ajouter un thème" onClick={() => fields.push({})} disabled={current_index>2} />
    </ul>
  )
}

const renderGoals = ({fields, meta: {error, submitFailed}}) => {
  let current_index = 1
  return (
    <ul style={styles.list}>
      <li>
        <Field
          name="goal1"
          component={renderTextField}
          label="Objectif"
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

const renderSteps = ({fields, meta: {error, submitFailed}}) => {
  let current_index = 1
  return (
    <ul style={styles.list}>
      <li>
        <Field
          name="step1"
          component={renderTextField}
          label="Etape"
        />
      </li>
      {fields.map((step, index) => {
        current_index += 1
        return(
          <li key={index}>
            <Field
              name={`step${index + 2}`}
              component={renderTextField}
              label={` Etape ${index + 2}`}
            />
            <IconButton tooltip="Supprimer" onClick={() => fields.remove(index)}>
              <Delete />
            </IconButton>
          </li>
      )})}
      <FlatButton style={styles.button} label="Ajouter une étape" onClick={() => fields.push({})} disabled={current_index>2} />
    </ul>
  )
}

const renderLinks = ({fields, meta: {error, submitFailed}}) => {
  let current_index = 1
  return (
    <ul style={styles.list}>
      <li>
        <Field
          name="link1"
          component={renderTextField}
          label="Source"
        />
      </li>
      {fields.map((link, index) => {
        current_index += 1
        return(
          <li key={index}>
            <Field
              name={`link${index + 2}`}
              component={renderTextField}
              label={` Source ${index + 2}`}
            />
            <IconButton tooltip="Supprimer" onClick={() => fields.remove(index)}>
              <Delete />
            </IconButton>
          </li>
      )})}
      <FlatButton style={styles.button} label="Ajouter une source" onClick={() => fields.push({})} disabled={current_index>2} />
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
        <FileInput
          name="add_photo"
          label="Others:"
          classNameLabel="file-input-label"
          className="file-input"
          dropzone_options={{
            multiple: false,
            accept: 'image/*'
          }}
        >
          <span>Add more</span>
        </FileInput>
      </div>
      <div>
        <FieldArray name="themes" component={renderThemes} label="Thèmes" />
      </div>
      <div>
        <FieldArray name="goals" component={renderGoals} label="Objectifs" />
      </div>
      <div>
        <Field name="description" component={renderTextField} label="Descriptif" multiLine={true} />
      </div>
      <div>
        <FieldArray name="steps" component={renderSteps} label="Etapes" />
      </div>
      <div>
        <FieldArray name="links" component={renderLinks} label="Sources" />
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
