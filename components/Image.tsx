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
    case "work":
    case "song":
      return (
        <NextImage
          src={`https://storage.googleapis.com/sages_work_content/${
            item.parent ? item.parent + "/" : ""
          }${item.id}${imgIdx ? `_${imgIdx}` : ""}.jpg`}
          alt={item.title}
          layout="fill"
          objectFit="contain"
          onDoubleClick={
            clickable
              ? () => {
                  router.push(
                    `/${item.type === "piece" ? "art" : ""}${
                      item.type === "work" ? "design" : ""
                    }${item.type === "song" ? "music" : ""}/${item.id}`
                  );
                }
              : undefined
          }
        />
      );
    case "series":
    case "collection":
    case "album":
      return (
        <NextImage
          src={`https://storage.googleapis.com/sages_work_content/${item.id}/${item.children[0].id}.jpg`}
          alt={item.title}
          layout="fill"
          objectFit="contain"
          onDoubleClick={
            clickable
              ? () => {
                  router.push(
                    `/${item.type === "series" ? "art" : ""}${
                      item.type === "collection" ? "design" : ""
                    }${item.type === "album" ? "music" : ""}/${item.id}`
                  );
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
