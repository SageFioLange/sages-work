/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { homeContent, points } from "../utils/constants";

const Home: NextPage = () => {
  return (
    <div className={styles.gallery}>
      {homeContent.map(({ name, width, height }, idx) => (
        <div
          key={idx}
          style={{
            gridColumn: `${points[idx][0]} / span ${points[idx][1]}`,
            gridRow: `${points[idx][2]} / span ${points[idx][3]}`,
            placeSelf: "stretch",
            outline: "20px blue",
          }}
          data-scroll
          data-scroll-speed={`${points[idx][4]}`}
        >
          <Image
            alt={name}
            src={`/images/${name}.jpeg`}
            width={width}
            height={height}
            className={styles.image}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
