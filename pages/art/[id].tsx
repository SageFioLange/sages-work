import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/ArtItem.module.css";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { useState } from "react";

const ArtItem: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const image = typeof id === "string" ? images[id] : undefined;
  const [desc, setDesc] = useState(false);

  return image ? (
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
          src={image.url}
          objectFit="contain"
          alt={image.name}
          layout="fill"
        />
      </div>
      <div
        className={styles.textContainer}
        style={{
          gridColumn: isMobile ? "1 / 2" : "2 / 3",
          gridRow: isMobile ? "2 / 3" : "1 / 2",
        }}
      >
        <h1 className={styles.title}>{image.name}</h1>
        <textarea readOnly={true} className={styles.description}>
          {image.description}
        </textarea>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ArtItem;
