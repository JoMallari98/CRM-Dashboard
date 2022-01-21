import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import UserInstitute from 'src/components/usertype/UserInstitute';

const UserInstitutionPage = () => {
  return (
    <OnboardingLayout type={PageType.SELECT_USER_INSTITUTE}>
      <UserInstitute />
    </OnboardingLayout>
  );
};

export default UserInstitutionPage;
