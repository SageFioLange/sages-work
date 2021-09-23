import type { NextPage } from "next";
import homeContent from "../constants/home";
import Parallax from "../components/Parallax";

const Home: NextPage = ({}) => {
  return <Parallax homeContent={homeContent} />;
};

export default Home;
