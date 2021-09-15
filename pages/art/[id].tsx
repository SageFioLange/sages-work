import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/ArtItem.module.css";
import Image from "next/image";
import Gallery from "../../components/Gallery";
import { isMobile } from "react-device-detect";
import media from "../../utils/constants/media";

const ArtItem: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const item = (typeof id === "string" ? media[id] : undefined) as
    | TPiece
    | TSeries;

  return item ? (
    <div
      data-scroll
      style={
        isMobile
          ? { height: "200vh", width: "100vw" }
          : { height: "100vh", width: "200vw" }
      }
      className={styles.container}
    >
      <div data-scroll className={styles.imageContainer}>
        {item.type === "piece" ? (
          <Image
            src={item.url}
            objectFit="contain"
            alt={item.title}
            layout="fill"
          />
        ) : (
          <Gallery
            urls={item.pieces.map(({ url }) => url)}
            alts={item.pieces.map(({ title }) => title)}
          />
        )}
      </div>
      <div
        className={styles.textContainer}
        style={{
          gridColumn: isMobile ? "1 / 2" : "2 / 3",
          gridRow: isMobile ? "2 / 3" : "1 / 2",
        }}
      >
        <h1 className={styles.title}>{item.title}</h1>
        {item.type === "piece" && item.series ? (
          <h2 className={styles.series}>{media[item.series].title}</h2>
        ) : null}
        <h3 className={styles.date}>{item.date}</h3>
        <textarea readOnly={true} className={styles.description}>
          {item.description}
        </textarea>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ArtItem;
