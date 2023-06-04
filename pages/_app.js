if (!globalThis.browser)
  React.useLayoutEffect = React.useEffect;

import { Provider } from 'react-redux';
import globalStyles from 'styles/global';

import { useStore } from 'store';
import ThemeProvider from 'utils/hocs/ThemeProvider';
import Layout from 'parts/Layout';
import { AuthProvider } from 'utils/hocs/AuthProvider';
import { useNextRouterViewTransitions } from 'use-view-transitions/next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {CurrentLinkContext, PrevLinkContext} from 'contexts/current-link-context';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();
  const [currentLinkID, setCurrentLinkID] = useState(0);
  const [prevLinkID, setPrevLinkID] = useState(0);

  useNextRouterViewTransitions(router);
  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      setCurrentLinkID(+(new URL(url, location.href).searchParams.get("id")));
      setPrevLinkID(+(new URL(location.href).searchParams.get("id")));
    })
    router.events.on("routeChangeComplete", () => {
      setCurrentLinkID("0");
    })
    setPrevLinkID(new URL(location.href).searchParams.get("id"));
  }, [])

  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>
          <CurrentLinkContext.Provider value={currentLinkID}>
            <PrevLinkContext.Provider value={prevLinkID}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PrevLinkContext.Provider>
            </CurrentLinkContext.Provider>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default MyApp;
