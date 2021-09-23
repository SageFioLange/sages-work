import type { NextPage } from "next";
import media from "../../constants/media";
import Image from "../../components/Image";
import styles from "../../styles/Gallery.module.css";

const Art: NextPage = () => {
  const items = Object.values(media)
    .filter(
      (item) =>
        (item.type === "piece" && !item.parent) || item.type === "series"
    )
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

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
