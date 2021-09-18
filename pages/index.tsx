import type { NextPage, InferGetStaticPropsType } from "next";
import homeContent from "../utils/constants/home";
import dynamic from "next/dynamic";

const Parallax = dynamic(() => import("../components/Parallax"), {
  ssr: false,
});

const Home: NextPage = ({}) => {
  return <Parallax homeContent={homeContent} />;
};

export default Home;
