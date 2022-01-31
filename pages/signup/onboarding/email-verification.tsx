import React, { useState } from 'react';
import OnboardingLayout from 'src/hoc/OnboardingLayout';
import { PageType } from 'src/components/common/LogoBrandingSection';
import EmailVerification from 'src/components/signup/onboarding/EmailVerification';

const EmailVerificationPage = () => {
  const [wrongCode, setWrongCode] = useState(false);

  return (
    <OnboardingLayout type={wrongCode ? PageType.WRONG_CODE : PageType.VERIFICATION_Select}>
      <EmailVerification wrongCode={wrongCode} setWrongCode={setWrongCode} />
    </OnboardingLayout>
  );
};

export default EmailVerificationPage;
