import type { NextPage } from "next";
import { homeContent, points } from "../utils/constants";
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("../components/Gallery"), {
  ssr: false,
});

const Home: NextPage = () => {
  return <Gallery content={homeContent} points={points} />;
};

export default Home;
