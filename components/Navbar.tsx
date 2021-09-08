import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { pages } from "../utils/constants";

const Navbar: NextComponentType = () => {
  const router = useRouter();

  return (
    <div className={styles.shelf}>
      <div className={styles.imageWrapper}>
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className={styles.logo}
        />
      </div>
      {/* <div className={styles. } */}
      {pages.map(({ path, name, color }, idx) => {
        const active = router.pathname === path;
        return (
          <div className={styles.linkContainer} key={idx}>
            {active ? (
              <div className={styles.dot} style={{ backgroundColor: color }} />
            ) : null}
            <Link href={path} passHref>
              <a
                className={styles.pageLink}
                style={{
                  color: active ? color : "black",
                  fontWeight: active ? 600 : 400,
                  fontFamily: active ? "cursive" : "monospace",
                }}
              >
                {name}
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
