import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Add from 'material-ui/svg-icons/av/playlist-add';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
//import ChipForm from './ChipForm';

const styles = {
  submit: { 
    margin: 12
  },
  button: {
    marginTop: 15
  },
  list: {
    marginLeft: -20 
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  },
  FFS:{
    position: 'absolute',
    lineHeight: '1.5',
    top: '38',
    transition: 'none',
    zIndex: '1',
    transform: 'none',
    transformOrigin: 'none',
    pointerEvents: 'none',
    userSelect: 'none',
    fontSize: '16',
    color: 'rgba(0, 0, 0, 0.8)',
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

const FileTextField  = ({floatingLabelText, fullWidth, input, label, meta: { touched, error },
  ...custom }) => {
    if (input.value && input.value[0] && input.value[0].name) {
      floatingLabelText = input.value[0].name;
    }
    delete input.value;
    return (
      <TextField
        hintText={label}
        fullWidth={fullWidth}
        floatingLabelShrinkStyle={styles.FFS}
        floatingLabelText={floatingLabelText}
        inputStyle={styles.exampleImageInput}
        type="file"
        accept='.jpg, .png, .jpeg'
        errorText={error}
        {...input}
        {...custom}
      />
    )
}

const renderSelectField = ({
  input,
  label,
  meta: {touched, error},
  children,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
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
          component={renderSelectField}
          label="Thème"
        >
          <MenuItem value="environment" primaryText="Environnement" />
          <MenuItem value="health" primaryText="Santé" />
          <MenuItem value="solidarity" primaryText="Solidarité" />
        </Field>
      </li>
      {fields.map((theme, index) => {
        current_index += 1
        return(
          <li key={index}>
            <Field
              name={`theme${index + 2}`}
              component={renderSelectField}
              label={` Thème ${index + 2}`}
            >
              <MenuItem value="environment" primaryText="Environnement" />
              <MenuItem value="health" primaryText="Santé" />
              <MenuItem value="solidarity" primaryText="Solidarité" />
            </Field>
            <IconButton tooltip="Supprimer" onClick={() => fields.remove(index)}>
              <Delete />
            </IconButton>
          </li>
      )})}
      <FlatButton style={styles.button} icon={<Add />} label="Ajouter un thème" onClick={() => fields.push({})} disabled={current_index>2} />
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
      <FlatButton style={styles.button} icon={<Add />} label="Ajouter une étape" onClick={() => fields.push({})} disabled={current_index>2} />
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
      <FlatButton style={styles.button} icon={<Add />} label="Ajouter une étape" onClick={() => fields.push({})} disabled={current_index>2} />
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
      <FlatButton style={styles.button} icon={<Add />} label="Ajouter une source" onClick={() => fields.push({})} disabled={current_index>2} />
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
        <Field name="image" component={FileTextField} floatingLabelText="Choisir une photo"
        fullWidth={true} />
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
