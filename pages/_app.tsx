import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";
import { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null);
  const { pathname } = useRouter();
  return (
    <LocomotiveScrollProvider
      options={{
        touchMultiplier: 1,
        reloadOnContextChange: true,
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
        resetNativeScroll: false,
      }}
      containerRef={containerRef}
      watch={[pathname]}
    >
      <Head>
        <title>Sage Fiorentino-Lange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main data-scroll-container ref={containerRef}>
        <div data-scroll-section>
          <Component {...pageProps} />
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
