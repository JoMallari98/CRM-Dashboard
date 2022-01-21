import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import FailedRegistration from 'src/components/investor/FailedRegistration';

const InvalidData = () => {
  return (
    <OnboardingLayout type={PageType.INVALID_DATA}>
      <FailedRegistration />
    </OnboardingLayout>
  );
};

export default InvalidData;
