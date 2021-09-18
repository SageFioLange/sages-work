import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/ArtItem.module.css";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import media from "../../utils/constants/media";

const ArtItem: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const item = (typeof id === "string" ? media[id] : undefined) as
    | TPiece
    | TSeries;

  return item.type === "piece" ? (
    <div
      data-scroll
      style={
        isMobile
          ? {
              height: "200vh",
              width: "100vw",
            }
          : {
              height: "100vh",
              width: "200vw",
            }
      }
      className={styles.container}
    >
      <div
        data-scroll
        className={styles.imageContainer}
        key={item.id}
        onClick={() => router.push(`/art/${item.id}`)}
      >
        <Image
          src={item.url}
          objectFit="contain"
          alt={item.title}
          layout="fill"
          onClick={() => router.push(`/art/${item.id}`)}
        />
      </div>

      <div
        className={styles.textContainer}
        style={{
          gridColumn: isMobile ? "1 / 2" : "2 / 3",
          gridRow: isMobile ? "2 / 3" : "1 / 2",
        }}
      >
        <h1 className={styles.title}>{item.title}</h1>
        {item.series && (
          <h2
            className={styles.series}
            onClick={() => {
              router.push(`/art/${item.series}`);
            }}
          >
            {media[item.series].title}
          </h2>
        )}
        <h3 className={styles.date}>{item.date}</h3>
        <textarea readOnly={true} className={styles.description}>
          {item.description}
        </textarea>
      </div>
    </div>
  ) : (
    <div
      data-scroll
      style={
        isMobile
          ? {
              height: `${(item.pieces.length + 1) * 100}vh`,
              width: "100vw",
              gridTemplate: `repeat(2, 1fr) / repeat(${item.pieces.length}, fr)`,
            }
          : {
              height: "100vh",
              width: `${(item.pieces.length + 1) * 100}vw`,
              gridTemplate: `repeat(${item.pieces.length}, fr) / repeat(2, 1fr)`,
            }
      }
      className={styles.container}
    >
      {item.pieces.map((image, idx) => (
        <div
          data-scroll
          className={styles.imageContainer}
          style={{
            gridColumn: isMobile ? "1 / 2" : `${idx + 1} / span 1`,
            gridRow: isMobile ? `${idx + 1} / span 1` : "1 / 2",
            overflow: "hidden",
          }}
          key={image.id}
          onClick={() => router.push(`/art/${image.id}`)}
        >
          <Image
            src={image.url}
            objectFit="contain"
            alt={image.title}
            layout="fill"
            onClick={() => router.push(`/art/${image.id}`)}
          />
        </div>
      ))}

      <div
        className={styles.textContainer}
        style={{
          gridColumn: isMobile
            ? "1 / span 1"
            : `${item.pieces.length + 1} / span 1`,
          gridRow: isMobile
            ? `${item.pieces.length + 1} / span 1`
            : "1 / span 1",
        }}
      >
        <h1 className={styles.title}>{item.title}</h1>
        {item.series && (
          <h2
            className={styles.series}
            onClick={() => {
              router.push(`/art/${item.series}`);
            }}
          >
            {media[item.series].title}
          </h2>
        )}
        <h3 className={styles.date}>{item.date}</h3>
        <textarea readOnly={true} className={styles.description}>
          {item.description}
        </textarea>
      </div>
    </div>
  );
};

export default ArtItem;
