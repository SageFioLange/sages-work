import type { NextComponentType } from "next";
import router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";
import { pages, pageColors } from "../utils/constants";
import { useState } from "react";

const Navigation: NextComponentType = () => {
  const { pathname } = useRouter();
  const [logoRotate, setLogoRotate] = useState(0);

  return (
    <div
      className={styles.container}
      style={{ border: `1px solid ${pageColors[pathname]}` }}
    >
      <div
        style={{
          transform: `rotate(${logoRotate * 360}deg)`,
        }}
        className={styles.logo}
      >
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className={styles.logo}
          onClick={() => {
            setLogoRotate(logoRotate + 1);
            let idx = 0;
            let match = false;
            pages.forEach(({ path }) => {
              if (path === pathname) match = true;
              if (!match) idx = idx + 1;
            });
            idx = idx + 1;
            if (idx === pages.length) idx = 0;
            router.push(pages[idx].path);
          }}
        />
      </div>
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
                  transition: "color 0.5s",
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
