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
        smooth: true,
        direction: "vertical",
        gestureDirection: "both",
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      containerRef={containerRef}
      watch={[pathname]}
    >
      <Head>
        <title>Sage Fiorentino-Lange</title>
        <link rel="icon" href="/favicon.ico" />
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
