import type { NextPage } from "next";
import { homeContent, points } from "../utils/constants";
import Gallery from "../components/Gallery";

const Home: NextPage = () => {
  return <Gallery content={homeContent} points={points} />;
};

export default Home;
