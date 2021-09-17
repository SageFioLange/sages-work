import { FC } from "react";
import styles from "../styles/Parallax.module.css";
import { isMobile } from "react-device-detect";
import router from "next/router";
import Image from "next/image";

type ParallaxProps = {
  homeContent: THomeContent;
  blurDataURLs: string[];
};

const Parallax: FC<ParallaxProps> = ({
  homeContent,
  blurDataURLs,
}: ParallaxProps) => {
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
                  layout="fill"
                  objectFit="contain"
                  alt={item.content.title}
                  src={item.content.url}
                  className={styles.image}
                  placeholder="blur"
                  blurDataURL={blurDataURLs[idx]}
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
