import type { AppProps } from "next/app";
import "styles/index.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBB87AlqcxS2KTwErAwRCN-nZolIlVU234",
  authDomain: "sages-c585b.firebaseapp.com",
  projectId: "sages-c585b",
  storageBucket: "sages-c585b.appspot.com",
  messagingSenderId: "715418059724",
  appId: "1:715418059724:web:402ca1a9b00c2f75a39369",
};

initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
