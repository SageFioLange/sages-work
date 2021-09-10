export const pages = [
  {
    name: "Home",
    path: "/home",
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
  },
  landscape: {
    name: "landscape",
    url: "https://i.stack.imgur.com/y9DpT.jpg",
  },
  square: {
    name: "square",
    url: "https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg",
  },
};

export const points = [
  [12, 15, 12, 25, 3],
  [18, 30, 7, 20, 10],
  [29, 25, 12, 25, 6],
];

export const homeContent = Object.values(images);
