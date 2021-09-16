import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/ArtItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import media from "../../utils/constants/media";

const ArtItem: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const item = (typeof id === "string" ? media[id] : undefined) as
    | TPiece
    | TSeries;

  console.log(item);

  return item ? (
    item.type === "piece" ? (
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
          <Image
            src={item.url}
            objectFit="contain"
            alt={item.title}
            layout="fill"
          />
        </div>
        <div
          className={styles.textContainer}
          style={{
            gridColumn: isMobile ? "1 / span 1" : "2 / span 1",
            gridRow: isMobile ? "2 / span 1" : "1 / span 1",
          }}
        >
          <h1 className={styles.title}>{item.title}</h1>
          {item.series && (
            <Link href={`/art/${media[item.series].id}`} passHref={true}>
              <h2 className={styles.series}>{media[item.series].title}</h2>
            </Link>
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
        {item.pieces.map((piece, idx) => (
          <div
            data-scroll
            className={styles.imageContainer}
            style={{
              gridColumn: isMobile ? "1 / 2" : `${idx + 1} / span 1`,
              gridRow: isMobile ? `${idx + 1} / span 1` : "1 / 2",
            }}
            key={piece.id}
          >
            <Image
              src={piece.url}
              objectFit="contain"
              alt={piece.title}
              layout="fill"
              onClick={() => router.push(`/art/${piece.id}`)}
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
          <h3 className={styles.date}>{item.date}</h3>
          <textarea readOnly={true} className={styles.description}>
            {item.description}
          </textarea>
        </div>
      </div>
    )
  ) : (
    <></>
  );
};

export default ArtItem;
