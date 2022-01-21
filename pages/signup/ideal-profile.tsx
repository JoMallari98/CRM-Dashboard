import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import UserTypeForm from 'src/components/usertype/UserTypeForm';

const UserData = () => {
  return (
    <OnboardingLayout type={PageType.USER_TYPE}>
      <UserTypeForm />
    </OnboardingLayout>
  );
};

export default UserData;
