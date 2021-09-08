import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pieces",
    path: "/pieces",
  },
  {
    name: "In Progress",
    path: "/progress",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header: NextComponentType = () => {
  return (
    <div className={styles.shelf}>
      <Image
        src="/logo.svg"
        width={100}
        height={100}
        alt="logo"
        className={styles.logo}
      />
      {pages.map((page, idx) => (
        <div className={styles.container} key={idx}>
          <Link href={page.path}>
            <a className={styles.pageLink}>{page.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Header;
