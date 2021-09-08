import type { NextComponentType } from "next";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const pages = ["Home", "Works", "In Progress", "Services", "About", "Contact"];

type HeaderProps = { current: string };

const Header: NextComponentType<{}, {}, HeaderProps> = ({
  current,
}: HeaderProps) => {
  return (
    <div className={styles.container}>
      {pages.map((page, idx) => (
        <p className={styles.section} key={idx}>
          {page}
        </p>
      ))}
    </div>
  );
};

export default Header;
