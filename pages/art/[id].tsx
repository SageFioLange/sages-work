import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/ArtItem.module.css";
import Image from "next/image";
import { images } from "../../utils/constants";
import { isMobile } from "react-device-detect";

const ArtItem: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const image = typeof id === "string" ? images[id] : undefined;

  return image ? (
    <div
      data-scroll
      style={{
        width: isMobile ? "100vw" : "150vw",
        height: isMobile ? "150vh" : "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
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
        data-scroll
        style={
          isMobile
            ? {
                margin: "0 5vw",
                height: "50vh",
                width: "90vw",
                inset: "0, 0, 0, auto",
              }
            : {
                marginTop: "25vh",
                height: "75vh",
                width: "35vw",
                inset: "auto, 0, 0, 0",
              }
        }
      >
        {isMobile ? (
          <p className={styles.description}>{image.description}</p>
        ) : (
          <pre className={styles.description}>{image.description}</pre>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ArtItem;
