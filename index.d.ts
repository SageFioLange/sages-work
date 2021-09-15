declare type TArt = {
  name: string;
  date: string;
  description: string;
  id: string | number;
  type: "art";
  url: string;
};

declare type TSeries = {
  title: string;
  date: string;
  description: string;
  id: string | number;
};

declare type TWriting = {
  name: string;
  date: string;
  id: string | numbber;
  type: "writing";
  contentType: "image" | "text";
  url: string;
};

declare type TMusic = {
  name: string;
  date: string;
  id: string | number;
  type: "music";
  url: string;
  imageUrl: string;
};

declare type TContent = TArt | TWriting | TMusic;
