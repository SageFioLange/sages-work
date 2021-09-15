import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/ArtItem.module.css";
import Image from "next/image";
import { images } from "../../utils/constants";
import { useState } from "react";

const ArtItem: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const image = typeof id === "string" ? images[id] : undefined;
  const [desc, setDesc] = useState(false);

  return image ? (
    <>
      <div data-scroll className={styles.imageContainer}>
        <Image
          src={image.url}
          objectFit="contain"
          alt={image.name}
          layout="fill"
        />
      </div>
      <h1 className={styles.title}>{image.name}</h1>
      <div
        className={styles.descContainer}
        onClick={() => setDesc(!desc)}
        style={{
          transition: "opacity 1s",
          opacity: desc ? 100 : 0,
        }}
      >
        <p
          style={{
            fontFamily: "monospace",
            backgroundColor: "white",
            padding: "25px",
            height: "auto",
            width: "auto",
            maxWidth: "40vw",
            maxHeight: "60vh",
            overflow: "auto",
            wordBreak: "break-word",
          }}
        >
          {image.description}
        </p>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ArtItem;
