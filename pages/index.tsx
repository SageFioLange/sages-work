/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { homeContent, points } from "../utils/constants";
import { isMobile } from "react-device-detect";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Home: NextPage = () => {
  const { scroll, isReady } = useLocomotiveScroll();
  useEffect(() => {
    if (isReady) scroll.update();
  });
  return (
    <div
      className={styles.gallery}
      style={{
        height: isMobile ? "250vh" : "100vh",
        width: isMobile ? "100vw" : "250vw",
      }}
    >
      {homeContent.map(({ name, url }, idx) => (
        <div
          key={idx}
          style={{
            gridColumn: isMobile
              ? `${points[idx][2]} / span ${points[idx][3]}`
              : `${points[idx][0]} / span ${points[idx][1]}`,
            gridRow: isMobile
              ? `${points[idx][0]} / span ${points[idx][1]}`
              : `${points[idx][2]} / span ${points[idx][3]}`,
            placeSelf: "stretch",
          }}
          data-scroll
          data-scroll-speed={`${points[idx][4]}`}
        >
          <img
            alt={name}
            src={url}
            className={styles.image}
            // layout="fill"
            // objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
