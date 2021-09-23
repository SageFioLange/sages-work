declare type TPiece = {
  title: string;
  date: string;
  description: string;
  id: string;
  multImgs?: number;
  parent?: string;
  type: "piece";
};

declare type TSeries = {
  title: string;
  date: string;
  description: string;
  id: string;
  children: TPiece[];
  type: "series";
};

declare type TWork = {
  title: string;
  date: string;
  description: string;
  id: string;
  multImgs?: number;
  parent?: string;
  type: "work";
};

declare type TCollection = {
  title: string;
  date: string;
  description: string;
  id: string;
  children: TWork[];
  type: "collection";
};

declare type TSong = {
  title: string;
  date: string;
  id: string;
  parent?: string;
  type: "song";
};

declare type TAlbum = {
  title: string;
  date: string;
  id: string;
  children: TSong[];
  type: "album";
};

declare type TContent = TPiece | TWork | TSong | TSeries | TCollection | TAlbum;

declare type THomeContent = {
  content: TContent;
  points: number[];
}[];
