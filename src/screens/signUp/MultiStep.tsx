import React, {useState, useEffect} from 'react';
import SignUp from './SignUp';
import StudentSignUp from './StudentSignUp';
import StudentIdAuth from './StudentIdAuth';

const MultiStep = () => {
  const [step, setStep] = useState(1);

  const prevStep = () => {
    setStep(step - 1);
  };
  const nextStep = (): void => {
    setStep(step + 1);
    console.log('enxt step!');
  };
  switch (step) {
    case 1:
      return <SignUp nextStep={nextStep} />;
    case 2:
      return <StudentSignUp nextStep={nextStep} />;
    case 3:
      return <StudentIdAuth />;
    default:
    // do nothing
  }
  return <div></div>;
};

export default MultiStep;
