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
        textAlign: "center",
      }}
    >
      <div style={{ padding: "25px" }}>
        <h1>This page is currently under construction.</h1>
        <h2 style={{ marginTop: "25px" }}>
          A short list of my skills and services
        </h2>
        <ul style={{ marginTop: "12px", textAlign: "left" }}>
          <li>Web Development and Search Engine Optimization</li>
          <li>Graphic Design and Branding</li>
          <li>Music Production, Mixing, and Live Performances</li>
          <li>Machine Learning Systems Development</li>
          <li>Data Analysis and Visualization</li>
          <li>Creative Direction and Project Management</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
