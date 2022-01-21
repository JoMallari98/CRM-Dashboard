import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import SignUpForm from 'src/components/signup/SignUpForm';

const SignUpPage = () => {
  return (
    <OnboardingLayout type={PageType.SIGN_UP}>
      <SignUpForm />
    </OnboardingLayout>
  );
};

export default SignUpPage;
