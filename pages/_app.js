import Head from "next/head";

import { ErrorBoundary } from "@sentry/react";
import NProgress from "nprogress";
import { Router } from "next/router";
import { wrapper } from "../store";

import Layout from "components/common/layout";

import "nprogress/nprogress.css";

import "public/css/default.css";
import "public/sass/style.scss";
import "public/css/animate.css";
import "public/css/owl-carousel.css";
import "public/css/mediaelementplayer.css";
import "public/css/slidenav.css";
import "public/css/responsive.css";
import "public/vendor/fontawesome4.7.0/css/font-awesome.min.css";
import "public/css/error.scss";

// init({
//   dsn:
//     "https://81728d51074e4744bd0cb4ed0041025c@o470176.ingest.sentry.io/5500466",
//   integrations: [new Integrations.BrowserTracing()],

//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
// });

Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary fallback={"An error has occured"}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="google-signin-client_id"
          content={process.env.NEXT_PUBLIC_GOOGLE_APP_ID}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>SoftNEP: Radio 1 Design</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="http://radio1.softnep.com/images/favicon.png" />
        <meta name="theme-color" content="#000" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"
          integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
};

export default wrapper.withRedux(App);
