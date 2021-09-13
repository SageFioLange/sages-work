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
    <div data-scroll-section>
      <div data-scroll className={styles.imageContainer}>
        <Image
          src={image.url}
          objectFit="contain"
          alt={image.name}
          layout="fill"
        />
      </div>
      <p data-scroll className={styles.title}>
        {image.name}
      </p>
      <p data-scroll className={styles.description}>
        {image.description}
      </p>
    </div>
  ) : (
    <div>
      <p>unable to find image.</p>
    </div>
  );
};

export default ArtItem;
