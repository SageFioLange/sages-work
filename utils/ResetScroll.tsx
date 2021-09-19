import { NextComponentType } from "next";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useRouter } from "next/router";

const ResetScroll: NextComponentType = ({ children }) => {
  const { scroll } = useLocomotiveScroll();
  const { pathname } = useRouter();

  useEffect(() => {
    scroll &&
      scroll.scrollTo("top", {
        duration: 0,
        disableLerp: true,
      });
  }, [scroll, pathname]);

  return <>{children}</>;
};

export default ResetScroll;
