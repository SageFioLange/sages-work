declare type TImage = {
  width: number;
  height: number;
};

declare type TPiece = {
  title: string;
  date: string;
  description: string;
  id: string;
  images: TImage[];
  series?: string;
  type: "piece";
};

declare type TSeries = {
  title: string;
  date: string;
  description: string;
  id: string;
  pieces: TPiece[];
  type: "series";
};

declare type TWork = {
  title: string;
  date: string;
  id: string;
  content: string | TImage;
  type: "work";
};

declare type TCollection = {
  title: string;
  date: string;
  description: string;
  id: string;
  works: TWork[];
  type: "collection";
};

declare type TSong = {
  title: string;
  date: string;
  id: string;
  image: TImage;
  type: "song";
};

declare type TAlbum = {
  title: string;
  date: string;
  id: string;
  songs: TSong[];
  type: "album";
};

declare type TContent = TPiece | TWork | TSong | TSeries | TCollection | TAlbum;

declare type THomeContent = {
  content: TContent;
  points: number[];
}[];
