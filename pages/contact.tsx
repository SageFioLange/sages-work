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
      <h1>This page is currently under construction.</h1>
      <h2>Please direct emails to contact@sages.work</h2>
      <h2>Please direct texts and calls to (505) - 738 - 4915</h2>
    </div>
  );
};

export default Home;
