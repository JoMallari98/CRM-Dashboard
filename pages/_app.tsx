import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'src/styles/createEmotionCache';
import theme from 'src/styles/theme';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
  session: Session;
}
function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { session, ...restPageProps } = pageProps;
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CacheProvider value={emotionCache}>
          <CssBaseline />
          <Component {...restPageProps} />
        </CacheProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
