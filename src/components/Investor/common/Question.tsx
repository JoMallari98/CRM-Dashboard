import React from "react";
import {
  Box,
  Button,
  Hidden,
  Paper,
  PaperProps,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useOnboarding } from "src/context/userOnBoardingContext";
import { SxProps } from "@mui/system";

type Props = {
  prevText?: string;
  nextText?: string;
  onPrev?(): void;
  onNext?(): void;
  isEndQuestion?: boolean;
  isStartQuestion?: boolean;
} & Pick<PaperProps, "sx">;

const Question: React.FC<Props> = (props) => {
  const { goNextQuestion, goPrevQuestion } = useOnboarding();
  const {
    children,
    prevText = "Previous question",
    nextText = "Next question",
    onPrev = goPrevQuestion,
    onNext = goNextQuestion,
    isEndQuestion = false,
    isStartQuestion = false,
    sx = null,
  } = props;

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        display="flex"
        justifyContent={mdDown ? "stretch" : "space-between"}
        alignItems="center"
      >
        <Hidden mdDown>
          <PrevButton
            variant={isStartQuestion ? "text" : "contained"}
            color="secondary"
            onClick={onPrev}
            startIcon={<ArrowBackIos />}
          >
            {prevText}
          </PrevButton>
        </Hidden>
        <QuestionContainer
          elevation={0}
          sx={{ width: mdDown ? "100%" : null, ...sx }}
        >
          {children}
        </QuestionContainer>
        <Hidden mdDown>
          <NextButton
            variant={isEndQuestion ? "text" : "contained"}
            color="secondary"
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
            color="primary"
            onClick={onPrev}
            startIcon={<ArrowBackIos />}
          >
            {prevText}
          </Button>

          <Button
            variant={isEndQuestion ? "text" : "contained"}
            color="secondary"
            endIcon={<ArrowForwardIos />}
            onClick={onNext}
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const NavigationButton = styled(Button)({
  padding: 50,
  textTransform: "none",
  height: 240,
  maxWidth: 260,
});

const PrevButton = styled(NavigationButton)({
  borderTopRightRadius: 16,
  borderBottomRightRadius: 16,
  color: "#4D4D4D",
});

const NextButton = styled(NavigationButton)({
  borderBottomLeftRadius: 16,
  borderTopLeftRadius: 16,
  color: "#4D4D4D",
});
