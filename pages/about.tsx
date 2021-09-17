import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ padding: 25 }}>
        This page is currently under construction.
      </h1>
      <h2 style={{ padding: 25, paddingBottom: 0 }}>Sage Fiorentino-Lange</h2>
      <textarea style={{ margin: 25, width: 500, height: 250 }}>
        is an artist and general creative based in Albuquerque, New Mexico. Her
        work is centered on the relationship between data and the contemporary
        human experience and stretches across many mediums including painting,
        sculpture, poetry, photography, music, and digital design.
      </textarea>
    </div>
  );
};

export default Home;
