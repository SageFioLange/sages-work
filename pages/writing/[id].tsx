import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/WritingItem.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div data-scroll className={styles.textContainer}>
      <h1 className={styles.title}>{image.name}</h1>
      <p className={styles.description}>{image.description}</p>
    </div>
  );
};

export default Home;
