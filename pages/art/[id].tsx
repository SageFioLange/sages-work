import type {
  NextPage,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticPaths,
} from "next";
import { useRouter } from "next/router";
import styles from "../../styles/ArtItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import media from "../../utils/constants/media";
import { getPlaiceholder } from "plaiceholder";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.values(media)
      .filter((item) => item.type === "piece" || item.type === "series")
      .map((item) => ({
        params: {
          id: item.id,
        },
      })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const getReturnValue = async (id: string) => {
    const item = media[id];
    const imageObjects = item.type === "piece" ? [item] : item.pieces;
    const images = await Promise.all(
      imageObjects.map(async (item) => {
        const { base64, img } = await getPlaiceholder(item.url);

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

  const returnValue = params
    ? await getReturnValue(params.id as string)
    : {
        props: {
          images: undefined,
        },
      };
  return returnValue;
};

const ArtItem: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  images,
}) => {
  const router = useRouter();
  const { id } = router.query;
  const item = (typeof id === "string" ? media[id] : undefined) as
    | TPiece
    | TSeries;

  return images ? (
    <div
      data-scroll
      style={
        isMobile
          ? {
              height: `${(images.length + 1) * 100}vh`,
              width: "100vw",
              gridTemplate: `repeat(2, 1fr) / repeat(${images.length}, fr)`,
            }
          : {
              height: "100vh",
              width: `${(images.length + 1) * 100}vw`,
              gridTemplate: `repeat(${images.length}, fr) / repeat(2, 1fr)`,
            }
      }
      className={styles.container}
    >
      {images.map((image, idx) => (
        <div
          data-scroll
          className={styles.imageContainer}
          style={{
            gridColumn: isMobile ? "1 / 2" : `${idx + 1} / span 1`,
            gridRow: isMobile ? `${idx + 1} / span 1` : "1 / 2",
            overflow: "hidden",
          }}
          key={image.id}
        >
          <Image
            src={image.src}
            objectFit="contain"
            alt={image.title}
            layout="fill"
            blurDataURL={image.blurDataURL}
            placeholder="blur"
            onClick={() => router.push(`/art/${image.id}`)}
          />
        </div>
      ))}

      <div
        className={styles.textContainer}
        style={{
          gridColumn: isMobile ? "1 / span 1" : `${images.length + 1} / span 1`,
          gridRow: isMobile ? `${images.length + 1} / span 1` : "1 / span 1",
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
    <></>
  );
};

export default ArtItem;
