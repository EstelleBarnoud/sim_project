import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import areIntlLocalesSupported from 'intl-locales-supported';

const styles = {
  button: {
    margin: 12
  },
  note: {
    fontSize: '12px',
    marginBottom: 10
  }
}

const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);
maxDate.setHours(0, 0, 0, 0);
  
let DateTimeFormat;

if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
} else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/fr');
    require('intl/locale-data/jsonp/fa-IR');
  }  

const validate = values => {
  const errors = {}
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'birthday'
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

const renderDatePicker = ({input, onChange , label, meta: {touched, error}, children, ...custom}) => (
    <DatePicker
        hintText="Birthday"
        DateTimeFormat={DateTimeFormat}
        okLabel="OK"
        cancelLabel="Annuler"
        locale="fr"
        formatDate={new DateTimeFormat('fr', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format}
        floatingLabelText={label}
        errorText={touched && error}
        autoOk={true}
        {...input}
        value = {input.value !== ''? new Date(input.value) : null}
        onChange = {(event, value) => {input.onChange(value)}}
        maxDate={maxDate}
        openToYearSelection={true} 
    />
)

const SignUpForm = props => {
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
        <Field name="birthday" component={renderDatePicker} label="Date de naissance" />
        <p style={styles.note}>Remarque : Vous devez être majeur pour exprimer votre opinion sur cette plateforme</p>
      </div>
      <div>
        <RaisedButton style={styles.button} label="M'inscrire" primary={true} 
            type="submit" disabled={pristine || submitting} />
        <RaisedButton style={styles.button} label="Effacer" primary={true}
            type="button" disabled={pristine || submitting} onClick={reset} />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'SignUpForm', // a unique identifier for this form
  validate
})(SignUpForm)
