import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import ResetPasswordForm from 'src/components/reset/ResetPasswordForm';

const ResetPasswordPage = () => {
  return (
    <OnboardingLayout type={PageType.FORGOT_PASSWORD}>
      <ResetPasswordForm />
    </OnboardingLayout>
  );
};
export default ResetPasswordPage;
