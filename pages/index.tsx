import type { NextPage, InferGetStaticPropsType } from "next";
import homeContent from "../constants/home";
import dynamic from "next/dynamic";

const Parallax = dynamic(() => import("../components/Parallax"), {
  ssr: false,
});

const Home: NextPage = ({}) => {
  return (
    <>
      <Parallax homeContent={homeContent} />
      <p
        style={{
          position: "fixed",
          top: "50vh",
          right: "-150vw",
        }}
      >
        If you&apos;re seeing this, please reload the site.
      </p>
    </>
  );
};

export default Home;
