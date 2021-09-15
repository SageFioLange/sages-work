import { FC, useState, CSSProperties } from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

type GalleryProps = {
  urls: string[];
  alts: string[];
  style?: CSSProperties;
};

const Gallery: FC<GalleryProps> = ({ urls, alts, style }) => {
  const [curIdx, setCurIdx] = useState(0);
  return (
    <div className={styles.container} style={style}>
      <AiFillCaretLeft />
      <AiFillCaretRight />
      <Image
        alt={alts[curIdx]}
        src={urls[curIdx]}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default Gallery;
