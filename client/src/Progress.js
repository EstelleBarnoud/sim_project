import React from 'react';
import {Step, Stepper, StepButton,} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  content: {
    width: '100%',
    maxWidth: 700,
    padding: 25
  },
  button: {
    marginTop: 12
  },
  flat: {
    marginRight: 12
  }
}

/**
 * Non-linear steppers allow users to enter a multi-step flow at any point.
 *
 * This example is similar to the regular horizontal stepper, except steps are no longer
 * automatically set to `disabled={true}` based on the `activeStep` prop.
 *
 * We've used the `<StepButton>` here to demonstrate clickable step labels.
 */
class Progress extends React.Component {

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Donnez des graines ou des fonds pour acheter du matériel';
      case 1:
        return 'Inscrivez-vous sur les évènements avec vos voisins';
      case 2:
        return "Partagez vos émotions et l'évolution de vos plantes";
      default:
        return 'Click a step to see the details';
    }
  }

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={styles.content}>
        <h2> Avancement </h2>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Etape 1
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Etape 2
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Etape 3
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <p>{this.getStepContent(stepIndex)}</p>
          <div style={styles.button}>
            <FlatButton
              label="Précédent"
              disabled={stepIndex === 0}
              onClick={this.handlePrev}
              style={styles.flat}
            />
            <RaisedButton
              label="Suivant"
              disabled={stepIndex === 2}
              primary={true}
              onClick={this.handleNext}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;