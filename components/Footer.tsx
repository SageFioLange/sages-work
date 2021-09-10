import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Footer.module.css";
import { pageColors } from "../utils/constants";

const Footer: NextComponentType = () => {
  const { pathname } = useRouter();

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: pageColors[pathname] }}
    />
  );
};

export default Footer;
