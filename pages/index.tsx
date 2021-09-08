import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const pages = ["Home", "Works", "In Progress", "Services", "About", "Contact"];

const Home: NextPage = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <Head>
        <title>Sage Fiorentino-Lange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.shelf}>
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className={styles.logo}
        />
        <div className={styles.container}>
          {pages.map((page, idx) => (
            <p className={styles.section} key={idx}>
              {page}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
