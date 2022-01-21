import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import SignInForm from 'src/components/signin/SignInForm';
const SignInPage = () => {
  return (
    <OnboardingLayout type={PageType.SIGN_IN}>
      <SignInForm />
    </OnboardingLayout>
  );
};

export default SignInPage;
