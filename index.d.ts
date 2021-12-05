declare type Item = {
  id: string;
  content: Content[];
  title: string;
  description: string;
};

declare type Content = {
  type: "image" | "video" | "audio" | "text";
  url: string;
};
