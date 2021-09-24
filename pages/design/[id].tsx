import type {
  NextPage,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";
import styles from "../../styles/Item.module.css";
import Image from "../../components/Image";
import media from "../../constants/media";

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return {
    props: {
      item: params
        ? (media[params.id as string] as TWork | TCollection)
        : undefined,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: Object.values(media)
      .filter((item) => item.type === "work" || item.type === "collection")
      .map(({ id }) => ({
        params: {
          id,
        },
      })),
    fallback: false,
  };
}

const DesignItem: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  item,
}) => {
  const router = useRouter();

  return item ? (
    item.type === "work" ? (
      <div
        data-scroll-section
        style={{ height: "100vh", width: "100vw", overflow: "auto" }}
      >
        {item.multImgs ? (
          Array(item.multImgs).map((_, idx) => (
            <div className={styles.sticky} key={idx}>
              <div className={styles.imageContainer}>
                <Image item={item} imgIdx={idx} />
              </div>
            </div>
          ))
        ) : (
          <div className={styles.sticky}>
            <div className={styles.imageContainer}>
              <Image item={item} />
            </div>
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{item.title}</h1>
          {item.parent && (
            <h2
              className={styles.parent}
              onClick={() => {
                router.push(`/art/${item.parent}`);
              }}
            >
              {media[item.parent].title}
            </h2>
          )}
          <h3 className={styles.date}>
            {new Date(item.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
            })}
          </h3>
          <textarea
            readOnly={true}
            className={styles.description}
            value={item.description}
          />
        </div>
      </div>
    ) : (
      <div
        data-scroll-section
        style={{ height: "100vh", width: "100vw", overflow: "auto" }}
      >
        {item.children.map((work, idx) => (
          <div className={styles.sticky} key={work.id}>
            <div className={styles.imageContainer} style={{ zIndex: idx }}>
              <Image item={work} clickable />
            </div>
          </div>
        ))}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{item.title}</h1>
          <h3 className={styles.date}>
            {new Date(item.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
            })}
          </h3>
          <textarea
            readOnly={true}
            className={styles.description}
            value={item.description}
          />
        </div>
      </div>
    )
  ) : (
    <h1>404: PAGE NOT FOUND</h1>
  );
};

export default DesignItem;
