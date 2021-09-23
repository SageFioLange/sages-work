import { FC } from "react";
import styles from "../styles/Parallax.module.css";
import { isMobile } from "react-device-detect";
import Image from "./Image";

type ParallaxProps = {
  homeContent: THomeContent;
};

const Parallax: FC<ParallaxProps> = ({ homeContent }: ParallaxProps) => {
  return (
    <div
      className={styles.parallax}
      style={{
        height: isMobile ? "250vh" : "100vh",
        width: isMobile ? "100vw" : "250vw",
      }}
    >
      {homeContent.map((item) => (
        <div
          key={item.content.id}
          style={{
            gridColumn: isMobile
              ? `${item.points[2]} / span ${item.points[3]}`
              : `${item.points[0]} / span ${item.points[1]}`,
            gridRow: isMobile
              ? `${item.points[0]} / span ${item.points[1]}`
              : `${item.points[2]} / span ${item.points[3]}`,
            placeSelf: "stretch",
            position: "relative",
          }}
          className={styles.container}
          data-scroll
          data-scroll-speed={`${item.points[4]}`}
        >
          <Image item={item.content} clickable />
        </div>
      ))}
    </div>
  );
};

export default Parallax;
