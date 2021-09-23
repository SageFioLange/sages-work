import type { NextPage } from "next";
import { useRouter } from "next/router";
import media from "../../constants/media";
import Image from "../../components/Image";
import styles from "../../styles/Gallery.module.css";

const Design: NextPage = () => {
  const router = useRouter();
  const items = Object.values(media)
    .filter(
      (item) =>
        (item.type === "work" && !item.parent) || item.type === "collection"
    )
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

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

export default Design;
