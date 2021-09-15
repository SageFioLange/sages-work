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

export const images: Record<string | number, TContent> = {
  portrait: {
    name: "portrait",
    date: "June 2002",
    description: `Yasdfasdfasdfasdfuasdhglkaghklwahefkajshdfkjlasdhf asdshf ashdf 
      lasdjhklf ashjdkf asdkjf eah it's a portrait. I'm born rich life ain't fair. It's silver spoon coon ho. Ain't nobody sicker in my Fisker vroom vroom ho, ain't no body... 
      Fiskers don't make noise when they start up, just so you know`,
    id: "portrait",
    type: "art",
    url: "https://st4.depositphotos.com/9998432/20093/v/450/depositphotos_200930142-stock-illustration-default-placeholder-doctor-half-length.jpg",
  },
  1052930: {
    name: "landscape",
    date: "1344-1567",
    id: 1052930,
    description:
      "oh my goooooooooooooooddddddddddd it's just a fucking placeholder bro chill out",
    type: "art",
    url: "https://i.stack.imgur.com/y9DpT.jpg",
  },
  "what the fuck": {
    name: "square",
    date: "2019",
    description:
      "What the fuck? What the fuck. What? What what the fuck. What fuck the what fuck the? Yes.",
    id: "what the fuck",
    type: "art",
    url: "https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg",
  },
};

export const homeContent = Object.values(images);

export const points = [
  [12, 8, 12, 29, 3],
  [18, 3, 7, 12, 10],
  [29, 4, 12, 22, 6],
];
