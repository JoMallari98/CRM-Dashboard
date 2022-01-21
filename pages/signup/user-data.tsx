import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import UserDataForm from 'src/components/investor/UserDataForm';

const UserData = () => {
  return (
    <OnboardingLayout type={PageType.USER_DATA}>
      <UserDataForm />
    </OnboardingLayout>
  );
};

export default UserData;
