import { FC } from "react";
import router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";
import { pages } from "../utils/constants/nav";
import { useState } from "react";

const Navigation: FC = () => {
  const { pathname } = useRouter();
  const [logoRotate, setLogoRotate] = useState(0);

  return (
    <>
      <div
        style={{
          transform: `rotate(${logoRotate * 360}deg)`,
          transition: "transform 1s",
        }}
        className={styles.logo}
      >
        <Image
          src="/logo.svg"
          layout="fill"
          alt="logo"
          onClick={() => {
            setLogoRotate(logoRotate + 1);
            const pathSplit = pathname.split("/");
            if (pathSplit.length == 3) router.push(`/${pathSplit[1]}`);
            else {
              let idx = 0;
              let match = false;
              pages.forEach(({ path }) => {
                if (path === pathname) match = true;
                if (!match) idx = idx + 1;
              });
              idx = idx + 1;
              if (idx === pages.length) idx = 0;
              router.push(pages[idx].path);
            }
          }}
        />
      </div>
      <div className={styles.container}>
        {pages.map(({ path, name, color }, idx) => {
          const active = pathname === path;
          return (
            <div style={{ position: "relative" }} key={idx}>
              {active ? (
                <div
                  className={styles.dot}
                  style={{ backgroundColor: color }}
                />
              ) : null}
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navigation;
