import { FC } from "react";
import NextImage from "next/image";
import { useRouter } from "next/router";

type TImageProps = {
  item: TContent;
  imgIdx?: number;
  clickable?: boolean;
};

const Image: FC<TImageProps> = ({ item, imgIdx = 0, clickable }) => {
  const router = useRouter();
  switch (item.type) {
    case "piece":
      return (
        <NextImage
          src={`https://storage.googleapis.com/sages_work_content/art/${
            item.series ? item.series + "/" : ""
          }${item.id}${imgIdx ? `_${imgIdx}` : ""}.jpg`}
          alt={item.title}
          layout="fill"
          objectFit="contain"
          placeholder="blur"
          blurDataURL={`/blurs/${item.series ? item.series + "/" : ""}${
            item.id
          }${imgIdx ? `_${imgIdx}` : ""}.jpg`}
          objectPosition="center center"
          onDoubleClick={
            clickable
              ? () => {
                  router.push(`art/${item.id}`);
                }
              : undefined
          }
        />
      );
    case "series":
      return (
        <NextImage
          src={`https://storage.googleapis.com/sages_work_content/art/${item.id}/${item.pieces[0].id}.jpg`}
          alt={item.title}
          layout="responsive"
          objectFit="contain"
          onDoubleClick={
            clickable
              ? () => {
                  router.push(`art/${item.id}`);
                }
              : undefined
          }
        />
      );
    default:
      return <></>;
  }
};

export default Image;
