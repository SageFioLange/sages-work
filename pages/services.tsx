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
      <div
        style={{
          padding: "25px",
          display: "grid",
          gap: "15px",
          gridTemplate: "repeat(7, 1fr) / 1fr 1fr",
          fontFamily: "monospace",
        }}
      >
        <h3 style={{ gridArea: "1 / 1 / 2 /2" }}>Service</h3>
        <h3 style={{ gridArea: "1 / 2 / 2 / 3" }}>Rate</h3>
        <p style={{ gridArea: "2 / 1 / 3 / 2" }}>
          Web Development and Search Engine Optimization
        </p>
        <p style={{ gridArea: "3 / 1 / 4 / 2" }}>Graphic Design and Branding</p>
        <p style={{ gridArea: "4 / 1 / 5 / 2" }}>
          Music Production, Mixing, and Live Performances
        </p>
        {/* <p style={{ gridArea: "5 / 1 / 6 / 2" }}>
          Machine Learning Systems Development
        </p>
        <p style={{ gridArea: "6 / 1 / 7 / 2" }}>
          Data Analysis and Visualization
        </p> */}
        <p style={{ gridArea: "5 / 1 / 6 / 2" }}>
          Creative Direction and Project Management
        </p>
        <p style={{ gridArea: "2 / 2 / 3 / 2" }}>$45/hr | $25/hr</p>
        <p style={{ gridArea: "3 / 2 / 4 / 2" }}>$25/hr | $35/hr</p>
        <p style={{ gridArea: "4 / 2 / 5 / 2" }}>
          $20/hr | $35/hr | Negotiable
        </p>
        {/* <p style={{ gridArea: "5 / 2 / 6 / 2" }}>$90/hr</p>
        <p style={{ gridArea: "6 / 2 / 7 / 2" }}>$50/hr | $30/hr</p> */}
        <p style={{ gridArea: "5 / 2 / 6 / 2" }}>$55/hr</p>
      </div>
    </div>
  );
};

export default Home;
