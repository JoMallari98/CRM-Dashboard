import React from 'react';
import {
  Box,
  Button,
  Hidden,
  Paper,
  PaperProps,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useOnboarding } from 'src/context/userOnBoardingContext';
import { SxProps } from '@mui/system';

type Props = {
  prevText?: string;
  nextText?: string;
  onPrev?(): void;
  onNext?(): void;
  isEndQuestion?: boolean;
  isStartQuestion?: boolean;
} & Pick<PaperProps, 'sx'>;

const Question: React.FC<Props> = (props) => {
  const { goNextQuestion, goPrevQuestion } = useOnboarding();
  const {
    children,
    prevText = 'Previous question',
    nextText = 'Next question',
    onPrev = goPrevQuestion,
    onNext = goNextQuestion,
    isEndQuestion = false,
    isStartQuestion = false,
    sx = null,
  } = props;

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box display="flex" justifyContent={mdDown ? 'stretch' : 'space-between'} alignItems="center">
        <Hidden mdDown>
          {isStartQuestion ? <PrevButtonStart
            variant={isStartQuestion ? 'text' : 'contained'}
            color="white"
            onClick={onPrev}
            startIcon={<ArrowBackIos />}
          >
            {prevText}
          </PrevButtonStart> : 
          <PrevButton
            variant={isStartQuestion ? 'text' : 'contained'}
            color="white"
            onClick={onPrev}
            startIcon={<ArrowBackIos />}
          >
            {prevText}
          </PrevButton>
          }
        </Hidden>
        <QuestionContainer elevation={0} sx={{ width: mdDown ? '100%' : null, ...sx }}>
          {children}
        </QuestionContainer>
        <Hidden mdDown>
          <NextButton
            variant={isEndQuestion ? 'text' : 'contained'}
            color="white"
            endIcon={<ArrowForwardIos />}
            onClick={onNext}
          >
            {nextText}
          </NextButton>
        </Hidden>
      </Box>
      {mdDown && (
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button
            variant="text"
            onClick={onPrev}
            startIcon={<ArrowBackIos />}
            style={{ color: '#858585' }}
          >
            {prevText}
          </Button>

          <Button
            variant={isEndQuestion ? 'text' : 'contained'}
            color="primary"
            endIcon={<ArrowForwardIos />}
            onClick={onNext}
            style={{
              color: isEndQuestion ? '#009EF8' : '#ffff',
              boxShadow: isEndQuestion
                ? '0px 0px 0px #ffff'
                : '6px 30px 51px rgba(10, 81, 143, 0.08)',
            }}
          >
            {nextText}
          </Button>
        </Box>
      )}
    </>
  );
};

export default Question;

const QuestionContainer = styled(Paper)({
  padding: 64,
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#ffff',
});

const NavigationButton = styled(Button)({
  padding: 50,
  textTransform: 'none',
  height: 240,
  maxWidth: 260,
});

const PrevButton = styled(NavigationButton)({
  borderTopRightRadius: 16,
  borderBottomRightRadius: 16,
  color: '#858585',
  boxShadow: '6px 30px 51px rgba(10, 81, 143, 0.08)',
});

const PrevButtonStart = styled(NavigationButton)({
  borderTopRightRadius: 16,
  borderBottomRightRadius: 16,
  color: '#858585',
});

const NextButton = styled(NavigationButton)({
  borderBottomLeftRadius: 16,
  borderTopLeftRadius: 16,
  color: '#009EF8',
  boxShadow: '6px 30px 51px rgba(10, 81, 143, 0.08)',
});
