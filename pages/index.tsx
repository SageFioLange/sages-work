import type { NextPage, InferGetStaticPropsType } from "next";
import homeContent from "../utils/constants/home";
import dynamic from "next/dynamic";
import { getPlaiceholder } from "plaiceholder";

export const getStaticProps = async () => {
  const images = await Promise.all(
    homeContent.map(async ({ content }) => {
      const url =
        content.type === "series" ? content.pieces[0].url : content.url;
      const { base64, img } = await getPlaiceholder(url);

      return {
        ...img,
        title: content.title,
        id: content.id,
        blurDataURL: base64,
      };
    })
  ).then((values) => values);
  return {
    props: {
      images,
    },
  };
};

const Parallax = dynamic(() => import("../components/Parallax"), {
  ssr: false,
});

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  images,
}) => {
  return (
    <Parallax
      homeContent={homeContent}
      blurDataURLs={images.map((image) => image.blurDataURL)}
    />
  );
};

export default Home;
