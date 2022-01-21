import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import UserBackgroundForm from 'src/components/investor/UserBackgroundForm';

const BackgroundInfo = () => {
  return (
    <OnboardingLayout type={PageType.BACKGROUND}>
      <UserBackgroundForm />
    </OnboardingLayout>
  );
};

export default BackgroundInfo;
