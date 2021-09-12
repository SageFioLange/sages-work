import { NextComponentType } from "next";
import styles from "../styles/Gallery.module.css";
import { isMobile } from "react-device-detect";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), {
  ssr: false,
});

type GalleryProps = {
  content: {
    name: string;
    url: string;
  }[];
  points: number[][];
};

const Gallery: NextComponentType<{}, {}, GalleryProps> = ({
  content,
  points,
}: GalleryProps) => {
  return (
    <div
      className={styles.gallery}
      style={{
        height: isMobile ? "250vh" : "100vh",
        width: isMobile ? "100vw" : "250vw",
      }}
    >
      {content.map(({ name, url }, idx) => (
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
          <Image
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

export default Gallery;
