import React from "react";

import Head from "next/head";
import { InferGetStaticPropsType } from "next";

import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore();

export default function Home({
  items,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Sage&apos;s Work</title>
      </Head>
    </>
  );
}

export async function getStaticProps() {
  const items: Item[] = [];
  const querySnapshot = await getDocs(collection(db, "items"));
  querySnapshot.forEach((item) => {
    const data = item.data();
    if ("title" in data && "description" in data && "content" in data) {
      items.push({
        title: data.title,
        description: data.description,
        content: data.content,
        id: item.id,
      });
    }
  });

  return {
    props: {
      items,
    },
  };
}
