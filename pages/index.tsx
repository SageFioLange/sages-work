import type { NextPage } from "next";
import homeContent from "../constants/home";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";
import Parallax from "../components/Parallax";

const ParallaxDynamic = dynamic(() => import("../components/Parallax"));

const Home: NextPage = ({}) => {
  return isMobile ? (
    <ParallaxDynamic homeContent={homeContent} />
  ) : (
    <Parallax homeContent={homeContent} />
  );
};

export default Home;
