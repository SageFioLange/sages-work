import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/ArtItem.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>The id of this art item is {id}.</p>
    </div>
  );
};

export default Home;
