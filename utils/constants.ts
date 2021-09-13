export const pages = [
  {
    name: "Home",
    path: "/",
    color: "#fd4a5c",
  },
  {
    name: "Art",
    path: "/art",
    color: "#f32735",
  },
  {
    name: "Writing",
    path: "/writing",
    color: "#e50695",
  },
  {
    name: "Music",
    path: "/music",
    color: "#9578d3",
  },
  {
    name: "Services",
    path: "/services",
    color: "#8ab7df",
  },
  {
    name: "Contact",
    path: "/contact",
    color: "#2a7ce1",
  },
  {
    name: "About",
    path: "/about",
    color: "#00c08a",
  },
];

export const pageColors = Object.fromEntries(
  pages.map(({ path, color }) => [path, color])
);

export const images = {
  portrait: {
    name: "portrait",
    id: "portrait",
    url: "https://st4.depositphotos.com/9998432/20093/v/450/depositphotos_200930142-stock-illustration-default-placeholder-doctor-half-length.jpg",
  },
  landscape: {
    name: "landscape",
    id: 1052930,
    url: "https://i.stack.imgur.com/y9DpT.jpg",
  },
  square: {
    name: "square",
    id: "what the fuck",
    url: "https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg",
  },
};

export const points = [
  [12, 8, 12, 29, 3],
  [18, 3, 7, 12, 10],
  [29, 4, 12, 22, 6],
];

export const homeContent = Object.values(images);
