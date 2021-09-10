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
    width: 489,
    height: 600,
  },
  landscape: {
    name: "landscape",
    width: 900,
    height: 497,
  },
  square: {
    name: "square",
    width: 420,
    height: 420,
  },
};

export const homeContent = Object.values(images);
