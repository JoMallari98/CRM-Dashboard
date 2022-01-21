import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import PhoneVerification from 'src/components/signup/onboarding/PhoneVerification';

const PhoneVerificationPage = () => {
  return (
    <OnboardingLayout type={PageType.VERIFICATION_CODE}>
      <PhoneVerification />
    </OnboardingLayout>
  );
};
export default PhoneVerificationPage;
