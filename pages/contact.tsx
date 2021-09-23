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
        Please direct emails to contact@sages.work and texts and calls to (505)
        - 738 - 4915
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
