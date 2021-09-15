import { FC } from "react";
import styles from "../styles/Parallax.module.css";
import { isMobile } from "react-device-detect";
import router, { useRouter } from "next/router";
import Image from "next/image";

type ParallaxProps = {
  content: TContent[];
  points: number[][];
};

const Parallax: FC<ParallaxProps> = ({ content, points }: ParallaxProps) => {
  return (
    <div
      className={styles.parallax}
      style={{
        height: isMobile ? "250vh" : "100vh",
        width: isMobile ? "100vw" : "250vw",
      }}
    >
      {content.map(({ name, id, type, url }, idx) => (
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
            backgroundColor: "blue",
            position: "relative",
          }}
          data-scroll
          data-scroll-speed={`${points[idx][4]}`}
        >
          <Image
            onClick={() => {
              router.push(`${type}/${id}`);
            }}
            loading="eager"
            alt={name}
            src={url}
            className={styles.image}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Parallax;
