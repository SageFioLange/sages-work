import { FC } from "react";
import styles from "../styles/Parallax.module.css";
import { isMobile } from "react-device-detect";
import router from "next/router";
import Image from "next/image";

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
      {homeContent.map((item, idx) => {
        switch (item.content.type) {
          case "piece":
            return (
              <div
                key={idx}
                style={{
                  gridColumn: isMobile
                    ? `${item.points[2]} / span ${item.points[3]}`
                    : `${item.points[0]} / span ${item.points[1]}`,
                  gridRow: isMobile
                    ? `${item.points[0]} / span ${item.points[1]}`
                    : `${item.points[2]} / span ${item.points[3]}`,
                  placeSelf: "stretch",
                  backgroundColor: "blue",
                  position: "relative",
                }}
                data-scroll
                data-scroll-speed={`${item.points[4]}`}
              >
                <Image
                  onClick={() => {
                    router.push(`art/${item.content.id}`);
                  }}
                  loading="eager"
                  alt={item.content.title}
                  src={item.content.url}
                  className={styles.image}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            );
          default:
            <></>;
        }
      })}
    </div>
  );
};

export default Parallax;
