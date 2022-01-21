import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import EmailVerification from 'src/components/signup/onboarding/EmailVerification';

const EmailVerificationPage = () => {
  return (
    <OnboardingLayout type={PageType.VERIFICATION_Select}>
      <EmailVerification />
    </OnboardingLayout>
  );
};

export default EmailVerificationPage;
