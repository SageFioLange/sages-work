import type { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import media from "../utils/constants/media";
import Image from "next/image";
import styles from "../styles/Art.module.css";
import { getPlaiceholder } from "plaiceholder";

export const getStaticProps = async () => {
  const imageObjects = Object.values(media).filter(
    (item) => item.type === "series" || !item.series
  );

  const images = await Promise.all(
    imageObjects.map(async (item) => {
      const url = item.type === "series" ? item.pieces[0].url : item.url;
      const { base64, img } = await getPlaiceholder(url);

      return {
        ...img,
        title: item.title,
        id: item.id,
        blurDataURL: base64,
      };
    })
  ).then((values) => values);

  return {
    props: {
      images,
    },
  };
};

const Art: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  images,
}) => {
  const router = useRouter();

  return (
    <div
      data-scroll
      style={
        isMobile
          ? {
              height: `${images.length * 100}vh`,
              width: "100vw",
              gridTemplate: `repeat(2, 1fr) / repeat(${images.length}, fr)`,
            }
          : {
              height: "100vh",
              width: `${images.length * 100}vw`,
              gridTemplate: `repeat(${images.length}, fr) / repeat(2, 1fr)`,
            }
      }
      className={styles.container}
    >
      {images.map((imageProps, idx) => (
        <div
          data-scroll
          className={styles.imageContainer}
          style={{
            gridColumn: isMobile ? "1 / 2" : `${idx + 1} / span 1`,
            gridRow: isMobile ? `${idx + 1} / span 1` : "1 / 2",
          }}
          key={imageProps.title}
        >
          <Image
            src={imageProps.src}
            alt={imageProps.title}
            objectFit="contain"
            layout="fill"
            blurDataURL={imageProps.blurDataURL}
            placeholder="blur"
            onClick={() => router.push(`/art/${imageProps.id}`)}
          />
        </div>
      ))}
    </div>
  );
};

export default Art;
