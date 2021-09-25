import type { NextPage } from "next";

const Contact: NextPage = () => {
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
      <h1
        style={{
          fontFamily: "monospace",
          padding: 25,
        }}
      >
        Please direct emails to{" "}
        <a
          href="mailto:contact@sages.work"
          style={{ textDecoration: "underline" }}
        >
          contact@sages.work
        </a>{" "}
        and texts and calls to{" "}
        <a href="tel:5057384915" style={{ textDecoration: "underline" }}>
          (505)-738-4915
        </a>
      </h1>
      <h1
        style={{
          fontFamily: "monospace",
          padding: 25,
        }}
      ></h1>
    </div>
  );
};

export default Contact;
