import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";
import { pages, pageColors } from "../utils/constants";
import { useState } from "react";

const Navigation: NextComponentType = () => {
  const { pathname } = useRouter();
  const [chat, setChat] = useState(false);

  return (
    <div className={styles.container}>
      <div
        style={{
          transform: `rotate(${chat ? 180 : 0}deg)`,
          transition: "transform 1s",
        }}
      >
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className={styles.logo}
          onClick={() => setChat(!chat)}
        />
      </div>
      {}
      <div
        style={{
          backgroundColor: pageColors[pathname],
        }}
        className={styles.scrollButtons}
      />
      {pages.map(({ path, name, color }, idx) => {
        const active = pathname === path;
        return (
          <div style={{ position: "relative" }} key={idx}>
            <Link href={path} passHref>
              <a
                style={{
                  color: active ? color : "black",
                  fontWeight: active ? 600 : 400,
                  fontFamily: active ? "cursive" : "monospace",
                  display: "inline-block",
                }}
              >
                {name}
              </a>
            </Link>
            {active ? (
              <div className={styles.dot} style={{ backgroundColor: color }} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
