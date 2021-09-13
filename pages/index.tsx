import type { NextPage } from "next";
import { homeContent, points } from "../utils/constants";
import dynamic from "next/dynamic";

const Parallax = dynamic(() => import("../components/Parallax"), {
  ssr: false,
});

const Home: NextPage = () => {
  return <Parallax content={homeContent} points={points} />;
};

export default Home;
