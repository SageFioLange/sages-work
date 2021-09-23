import type { NextPage } from "next";
import styles from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sage Fiorentino-Lange</h1>
      <textarea
        className={styles.bio}
        value="is an artist and general creative based in Albuquerque, New Mexico. Her
        work is centered on the relationship between data and the contemporary
        human experience and stretches across many mediums including painting,
        poetry, photography, music, and digital design."
      />
    </div>
  );
};

export default About;
