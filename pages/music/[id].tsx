import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/MusicItem.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>The id of this music item is {id}.</p>
    </div>
  );
};

export default Home;
