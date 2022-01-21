import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';

import IdentityConfirmationForm from 'src/components/investor/IdentityConfirmationForm';

const ConfirmCRD = () => {
  return (
    <OnboardingLayout type={PageType.CONFIRM_CRD}>
      <IdentityConfirmationForm />
    </OnboardingLayout>
  );
};

export default ConfirmCRD;
