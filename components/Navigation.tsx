import type { NextComponentType } from "next";
import router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";
import { pages, pageColors } from "../utils/constants";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const Navigation: NextComponentType = () => {
  const { pathname } = useRouter();
  const [logoRotate, setLogoRotate] = useState(0);

  return (
    <>
      <div
        style={{
          transform: `rotate(${logoRotate * -360}deg)`,
          transition: "transform 1s",
          position: "fixed",
          top: isMobile ? "auto" : 0,
          left: isMobile ? "auto" : 0,
          bottom: isMobile ? 0 : "auto",
          right: isMobile ? 0 : "auto",
          marginTop: "25px",
          marginLeft: "10px",
          zIndex: 1,
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
            router.push(pages[idx].path, "/");
          }}
        />
      </div>
      <div
        className={styles.container}
        style={{
          top: isMobile ? "auto" : 0,
          bottom: isMobile ? 0 : "auto",
        }}
      >
        {pages.map(({ path, name, color }, idx) => {
          const active = pathname === path;
          return (
            <div style={{ position: "relative" }} key={idx}>
              {isMobile ? (
                <span
                  style={{
                    color: active ? color : "black",
                    fontWeight: active ? 600 : 400,
                    fontFamily: active ? "cursive" : "monospace",
                    display: "inline-block",
                    transition: "color 0.5s",
                  }}
                  onClick={() => router.push(path, "/")}
                >
                  {name}
                </span>
              ) : (
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
              )}
              {active ? (
                <div
                  className={styles.dot}
                  style={{ backgroundColor: color }}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navigation;
