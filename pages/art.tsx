import type { NextPage } from "next";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import media from "../constants/media";
import Image from "next/image";
import styles from "../styles/Art.module.css";

const Art: NextPage = () => {
  const router = useRouter();
  const items = Object.values(media)
    .filter((item) => item.type === "series" || !item.series)
    .map((item) => {
      return item.type === "series" ? item.pieces[0] : item;
    });

  return (
    <div
      data-scroll
      style={
        isMobile
          ? {
              height: `${items.length * 100}vh`,
              width: "100vw",
              gridTemplate: `repeat(2, 1fr) / repeat(${items.length}, fr)`,
            }
          : {
              height: "100vh",
              width: `${items.length * 100}vw`,
              gridTemplate: `repeat(${items.length}, fr) / repeat(2, 1fr)`,
            }
      }
      className={styles.container}
    >
      {items.map((item, idx) => (
        <div
          data-scroll
          className={styles.imageContainer}
          style={{
            gridColumn: isMobile ? "1 / 2" : `${idx + 1} / span 1`,
            gridRow: isMobile ? `${idx + 1} / span 1` : "1 / 2",
          }}
          key={item.title}
        >
          <Image
            src={item.url}
            alt={item.title}
            objectFit="scale-down"
            layout="fill"
            placeholder={item.id === "surgery" ? "blur" : "empty"}
            blurDataURL={
              item.id === "surgery" ? "/blur/surgery.jpg" : undefined
            }
            onClick={() =>
              router.push(
                `/art/${item.series ? media[item.series].id : item.id}`
              )
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Art;
