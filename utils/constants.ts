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
    url: "https://st4.depositphotos.com/9998432/20093/v/450/depositphotos_200930142-stock-illustration-default-placeholder-doctor-half-length.jpg",
    width: 489,
    height: 600,
  },
  landscape: {
    name: "landscape",
    url: "https://i.stack.imgur.com/y9DpT.jpg",
    width: 900,
    height: 497,
  },
  square: {
    name: "square",
    url: "https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg",
    width: 420,
    height: 420,
  },
};

export const points = [
  [11, 2, 12, 2],
  [18, 6, 7, 1],
  [29, 5, 12, 3],
];

export const homeContent = Object.values(images);
