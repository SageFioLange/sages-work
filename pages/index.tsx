import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { homeContent } from "../utils/constants";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {homeContent.map(({ name, width, height }, idx) => (
        <Image
          key={idx}
          alt={name}
          src={`/images/${name}.jpeg`}
          width={width}
          height={height}
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default Home;
