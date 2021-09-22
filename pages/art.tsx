import type { NextPage } from "next";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import media from "../constants/media";
import Image from "../components/Image";
import styles from "../styles/Art.module.css";
import shuffle from "../utils/shuffle";

const Art: NextPage = () => {
  const router = useRouter();
  const items = shuffle(
    Object.values(media)
      .filter((item) => item.type === "series" || !item.series)
      .map((item) => {
        return item.type === "series" ? item.pieces[0] : item;
      })
  );

  return (
    <div
      data-scroll
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
            <Image item={item} clickable />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Art;
