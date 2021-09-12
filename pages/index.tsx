import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

// This is a hack to make sure that locomotive scroll works on the home page on the first load
const Index: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home", "/");
  });
  return <div />;
};

export default Index;
