import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import PasswordResetRequest from 'src/components/reset/ResetPasswordSuccess';

const PasswordResetSuccessPage = () => {
  return (
    <OnboardingLayout type={PageType.PASSWORD_RESET_REQUEST}>
      <PasswordResetRequest />
    </OnboardingLayout>
  );
};

export default PasswordResetSuccessPage;
