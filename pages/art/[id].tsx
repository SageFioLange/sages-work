import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/ArtItem.module.css";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import media from "../../constants/media";

const ArtItem: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const item = typeof id === "string" ? media[id] : undefined;

  return item ? (
    item.type === "piece" ? (
      <div
        data-scroll-section
        style={{ height: "100vh", width: "100vw", overflow: "auto" }}
      >
        <div className={styles.sticky}>
          <div className={styles.imageContainer}>
            <Image
              src={item.url}
              alt={item.title}
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.textContainer}>
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
        data-scroll-section
        style={{ height: "100vh", width: "100vw", overflow: "auto" }}
      >
        {item.pieces.map((image, idx) => (
          <div className={styles.sticky} key={image.id}>
            <div className={styles.imageContainer} style={{ zIndex: idx }}>
              <Image
                loading="eager"
                src={image.url}
                alt={image.title}
                objectFit="contain"
                layout="fill"
              />
            </div>
          </div>
        ))}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{item.title}</h1>
          <h3 className={styles.date}>{item.date}</h3>
          <textarea readOnly={true} className={styles.description}>
            {item.description}
          </textarea>
        </div>
      </div>
    )
  ) : (
    <h1>404: PAGE NOT FOUND</h1>
  );
};

export default ArtItem;
