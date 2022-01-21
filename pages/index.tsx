import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import OnBoardingIntro from 'src/components/common/OnBoardingIntro';

const WelcomePage = () => {
  return (
    <OnboardingLayout type={PageType.WELCOME}>
      <OnBoardingIntro />
    </OnboardingLayout>
  );
};

export default WelcomePage;
