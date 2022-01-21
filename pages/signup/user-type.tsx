import React from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import UserType from 'src/components/usertype/UserType';

const TypeOfUser = () => {
  return (
    <OnboardingLayout type={PageType.SELECT_USER_TYPE}>
      <UserType />
    </OnboardingLayout>
  );
};

export default TypeOfUser;
