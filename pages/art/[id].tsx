import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/ArtItem.module.css";
import Image from "next/image";
import { images } from "../../utils/constants";

const ArtItem: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const image = typeof id === "string" ? images[id] : undefined;

  return image ? (
    <div data-scroll-section className={styles.container}>
      <div data-scroll className={styles.imageContainer}>
        <Image
          src={image.url}
          objectFit="contain"
          alt={image.name}
          layout="fill"
        />
      </div>
      <div data-scroll className={styles.textContainer}>
        <div>
          <h1 className={styles.title}>{image.name}</h1>
          <p className={styles.description}>{image.description}</p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ArtItem;
