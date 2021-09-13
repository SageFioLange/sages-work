import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/ArtItem.module.css";
import Image from "next/image";
import { images } from "../../utils/constants";

const ArtItem: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const image = typeof id === "string" ? images[id] : undefined;

  return image ? (
    <div data-scroll-section>
      <div className={styles.imageContainer}>
        <Image
          src={image.url}
          objectFit="contain"
          alt={image.name}
          layout="fill"
        />
      </div>
      <p>
        The id of this art item is {id}
        ashdfashjdfashdfas dfasdfhasldjfhasdfaskjdlfjasdkjfas
        dfahjsdkfhaskldfhaskdf asdfjhasldkfjhaslkdfhas
        dfjashdlkfhjasdklfjhasdfasjdhflkasjdhflkasdf ashdfashjdfashdfas
        dfasdfhasldjfhasdfaskjdlfjasdkjfas dfahjsdkfhaskldfhaskdf
        asdfjhasldkfjhaslkdfhas dfjashdlkfhjasdklfjhasdfasjdhflkasjdhflkasdf
        ashdfashjdfashdfas dfasdfhasldjfhasdfaskjdlfjasdkjfas
        dfahjsdkfhaskldfhaskdf asdfjhasldkfjhaslkdfhas
        dfjashdlkfhjasdklfjhasdfasjdhflkasjdhflkasdf ashdfashjdfashdfas
        dfasdfhasldjfhasdfaskjdlfjasdkjfas dfahjsdkfhaskldfhaskdf
        asdfjhasldkfjhaslkdfhas dfjashdlkfhjasdklfjhasdfasjdhflkasjdhflkasdf
        ashdfashjdfashdfas dfasdfhasldjfhasdfaskjdlfjasdkjfas
        dfahjsdkfhaskldfhaskdf asdfjhasldkfjhaslkdfhas
        dfjashdlkfhjasdklfjhasdfasjdhflkasjdhflkasdf ashdfashjdfashdfas
        dfasdfhasldjfhasdfaskjdlfjasdkjfas dfahjsdkfhaskldfhaskdf
        asdfjhasldkfjhaslkdfhas dfjashdlkfhjasdklfjhasdfasjdhflkasjdhflkasdf
        ashdfashjdfashdfas dfasdfhasldjfhasdfaskjdlfjasdkjfas
        dfahjsdkfhaskldfhaskdf asdfjhasldkfjhaslkdfhas
        dfjashdlkfhjasdklfjhasdfasjdhflkasjdhflkasdf ashdfashjdfashdfas
        dfasdfhasldjfhasdfaskjdlfjasdkjfas dfahjsdkfhaskldfhaskdf
        asdfjhasldkfjhaslkdfhas dfjashdlkfhjasdklfjhasdfasjdhflkasjdhflkasdf
        ashdfashjdfashdfas dfasdfhasldjfhasdfaskjdlfjasdkjfas
        dfahjsdkfhaskldfhaskdf asdfjhasldkfjhaslkdfhas
        dfjashdlkfhjasdklfjhasdfasjdhflkasjdhflkasdf
      </p>
    </div>
  ) : (
    <div>
      <p>unable to find image.</p>
    </div>
  );
};

export default ArtItem;
