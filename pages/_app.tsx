import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";
import { useRef } from "react";
import ResetScroll from "../utils/ResetScroll";

function MyApp({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null);
  const { pathname } = useRouter();

  return (
    <LocomotiveScrollProvider
      options={{
        touchMultiplier: 2,
        smooth: true,
        direction: "horizontal",
        gestureDirection: "both",
        smartphone: {
          smooth: true,
          direction: "vertical",
          gestureDirection: "both",
        },
        tablet: {
          smooth: true,
          direction: "vertical",
          gestureDirection: "both",
        },
      }}
      containerRef={containerRef}
      watch={[pathname]}
    >
      <Head>
        <title>Sage Fiorentino-Lange</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="l7AB1upu6rJ_wnCYeiKUk0zro8c_e9oMaHMERsGHEG8"
        />
      </Head>
      <Navigation />
      <ResetScroll>
        <main data-scroll-container ref={containerRef}>
          <div data-scroll-section>
            <Component {...pageProps} />
          </div>
        </main>
      </ResetScroll>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
