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
      data-scroll-section
      style={{ height: "100vh", width: "100vw", overflow: "auto" }}
    >
      {items.map((item, idx) => (
        <div
          className={styles.sticky}
          style={{
            zIndex: idx,
          }}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.url}
              alt={item.title}
              objectFit="contain"
              layout="fill"
              onClick={() =>
                router.push(`/art/${item.series ? item.series : item.id}`)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Art;
