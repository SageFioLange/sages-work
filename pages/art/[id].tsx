import type {
  NextPage,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";
import styles from "../../styles/ArtItem.module.css";
import Image from "../../components/Image";
import media from "../../constants/media";

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return {
    props: {
      item: params ? media[params.id as string] : undefined,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(media).map((key) => ({
      params: {
        id: key,
      },
    })),
    fallback: false,
  };
}

const ArtItem: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  item,
}) => {
  const router = useRouter();

  return item ? (
    item.type === "piece" ? (
      <div
        data-scroll-section
        style={{ height: "100vh", width: "100vw", overflow: "auto" }}
      >
        {item.images.map((image, idx) => (
          <div className={styles.sticky} key={idx}>
            <div className={styles.imageContainer}>
              <Image item={item} imgIdx={idx} />
            </div>
          </div>
        ))}
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
        {item.pieces.map((piece, idx) => (
          <div className={styles.sticky} key={piece.id}>
            <div className={styles.imageContainer} style={{ zIndex: idx }}>
              <Image item={piece} clickable />
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
