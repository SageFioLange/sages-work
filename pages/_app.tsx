import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null);
  const { pathname } = useRouter();
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: "horizontal",
        gestureDirection: "both",
      }}
      containerRef={containerRef}
      watch={[isMobile, pathname]}
    >
      <main data-scroll-container ref={containerRef}>
        <Head>
          <title>Sage Fiorentino-Lange</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navigation />
        <div data-scroll-section>
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
}
export default MyApp;
