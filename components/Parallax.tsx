import { NextComponentType } from "next";
import styles from "../styles/Parallax.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

type ParallaxProps = {
  content: TContent[];
  points: number[][];
};

const Parallax: NextComponentType<{}, {}, ParallaxProps> = ({
  content,
  points,
}: ParallaxProps) => {
  const router = useRouter();
  return (
    <div className={styles.parallax}>
      {content.map(({ name, id, type, url }, idx) => (
        <div
          key={idx}
          style={{
            gridRow: `${points[idx][0]} / span ${points[idx][1]}`,
            gridColumn: `${points[idx][2]} / span ${points[idx][3]}`,
            placeSelf: "stretch",
            position: "relative",
          }}
          data-scroll
          data-scroll-speed={`${points[idx][4]}`}
        >
          <Image
            onClick={() => {
              router.push(`${type}/${id}`);
            }}
            loading="eager"
            alt={name}
            src={url}
            className={styles.image}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Parallax;
