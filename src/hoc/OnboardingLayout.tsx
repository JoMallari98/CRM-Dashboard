import React from 'react';
import { OnBoardingContextProvider } from 'src/context/userOnBoardingContext';
import { styled, Grid, useTheme, useMediaQuery } from '@mui/material';
import LogoBrandingSection, { PageType } from 'src/components/common/LogoBrandingSection';

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
  type?: PageType;
}

const OnboardingLayout: React.FC<Props> = ({ children, ...props }) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <OnBoardingContextProvider>
      <Wrapper>
        <InnerWrapper>
          <Grid container alignItems="stretch" flexGrow={1} direction={mdDown ? 'column' : 'row'}>
            <Grid item md={6}>
              <LogoBrandingSection type={props.type} />
            </Grid>
            <Grid item md={6}>
              {children}
            </Grid>
          </Grid>
        </InnerWrapper>
      </Wrapper>
    </OnBoardingContextProvider>
  );
};

const Wrapper = styled('div')`
  background: #f8fcff;
  padding-top: 2rem;
  padding-left: 4rem;
  padding-right: 2rem;
  width: 100%;
  height: 100vh !important;
  @media screen and (max-width: 600px){
  padding-left: 5px;
  padding-right: 5px;
  }
`;

const InnerWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  background: '#F8FCFF',
});

export default OnboardingLayout;
