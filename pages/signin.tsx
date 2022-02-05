import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import SignInForm from 'src/components/signin/SignInForm';
const SignInPage = ({onSubmit}: any) => {
  return (
    <OnboardingLayout type={PageType.SIGN_IN}>
      <SignInForm onSubmit={onSubmit}/>
    </OnboardingLayout>
  );
};

export default SignInPage;
