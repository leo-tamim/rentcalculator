import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import DefaultLayout from "@/layouts/DefaultLayout";
import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/lib/createEmotionCache";
import { Provider } from "react-redux";
import { store } from "@/store";
import {
  AppContextProvider,
  AppStyleProvider,
  AppThemeProvider,
} from "@/@crema";
import dayjs from "dayjs";
const utc = require("dayjs/plugin/utc");

/**
 * Extend Dayjs plugins
 */
dayjs.extend(utc);

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends Omit<AppProps, "Component"> {
  emotionCache?: EmotionCache;
  Component: any;
}

function MyApp({ Component, pageProps, emotionCache }: MyAppProps) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <CacheProvider value={emotionCache ?? clientSideEmotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
        <AppContextProvider>
          <Provider store={store}>
            <AppThemeProvider>
              <AppStyleProvider>
                <CssBaseline />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </AppStyleProvider>
            </AppThemeProvider>
          </Provider>
        </AppContextProvider>
      </ApolloProvider>
    </CacheProvider>
  );
}

export default MyApp;
