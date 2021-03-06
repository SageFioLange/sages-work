const singular: Record<string, TPiece | TWork | TSong> = {
  absurdism: {
    title: "Absurdism",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "absurdism",
    parent: "memePosters",
    type: "work",
  },
  capitalism: {
    title: "Capitalism",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "capitalism",
    parent: "memePosters",
    type: "work",
  },
  celebrity: {
    title: "Celebrity",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "celebrity",
    parent: "memePosters",
    type: "work",
  },
  criticalMass: {
    title: "Critical Mass",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "criticalMass",
    parent: "memePosters",
    type: "work",
  },
  depression: {
    title: "Depression",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "depression",
    parent: "memePosters",
    type: "work",
  },
  fame: {
    title: "Fame",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "fame",
    parent: "memePosters",
    type: "work",
  },
  groupMentality: {
    title: "Group Mentality",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "groupMentality",
    parent: "memePosters",
    type: "work",
  },
  hate: {
    title: "Hate",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "hate",
    parent: "memePosters",
    type: "work",
  },
  nostalgia: {
    title: "Nostalgia",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "nostalgia",
    parent: "memePosters",
    type: "work",
  },
  politics: {
    title: "Politics",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "politics",
    parent: "memePosters",
    type: "work",
  },
  positivity: {
    title: "Positivity",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "positivity",
    parent: "memePosters",
    type: "work",
  },
  sexuality: {
    title: "Sexuality",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "sexuality",
    parent: "memePosters",
    type: "work",
  },
  bicep: {
    title: "Bicep",
    date: new Date(2018, 10).toString(),
    description:
      "Inspired by the relationship of the part to the whole, this work draws comparison between plant and animal life.",
    id: "bicep",
    type: "piece",
  },
  goldenLife: {
    title: "Golden Life",
    date: new Date(2018, 6).toString(),
    description: "Taken in the suburbs of Massachussets.",
    id: "goldenLife",
    type: "piece",
  },
  bigZipper: {
    title: "The Big Zipper",
    date: new Date(2018, 10).toString(),
    description:
      "This work uses long exposure to render a bright night sky. The focal element, a structure used for shade, appears to unzip (or zip up) the sky above. The juxtaposition of the sky and the shade are signifiers of the dynamic between human structures and the natural world.",
    id: "bigZipper",
    type: "piece",
  },
  juggler: {
    title: "Juggler",
    date: new Date(2018, 10).toString(),
    description: "A practice in abstract composition using shadow.",
    type: "piece",
    id: "juggler",
  },
  forestFire: {
    title: "Forest Fire",
    date: new Date(2021, 9).toString(),
    description: 'Acrylics on Canvas Foundation Board. 12"x16"',
    id: "forestFire",
    type: "piece",
  },
  conversation: {
    title: "Conversation",
    date: new Date(2021, 9).toString(),
    description: 'Acrylics on Canvas Foundation Board. 12"x16"',
    id: "conversation",
    type: "piece",
  },
  surgery: {
    title: "Surgery",
    date: new Date(2021, 9).toString(),
    description: 'Acrylics on Canvas Foundation Board. 12"x16"',
    id: "surgery",
    type: "piece",
  },
  loveHateFaith: {
    title: "Love - Hate - Faith",
    date: new Date(2021, 2).toString(),
    description:
      'The incipient piece in the Cloud Watching series. This work arranges spatial representations of religious verses such that the projection is of the continuum from "Love" to "Hate" from the perspective of "Faith"',
    type: "piece",
    parent: "cloudWatching",
    id: "loveHateFaith",
  },
  eastWestSun: {
    title: "East - West - Sun",
    date: new Date(2021, 3).toString(),
    description:
      'A piece in the Cloud Watching series. This work arranges spatial representations of religious verses such that the projection is of the continuum from "East" to "West" from the perspective of "Sun"',
    id: "eastWestSun",
    type: "piece",
    parent: "cloudWatching",
  },
  godSatanMan: {
    title: "God - Satan - Man",
    date: new Date(2021, 3).toString(),
    description:
      'A piece in the Cloud Watching series. This work arranges spatial representations of religious verses such that the projection is of the continuum from "East" to "West" from the perspective of "Sun"',
    type: "piece",
    parent: "cloudWatching",
    id: "godSatanMan",
  },
  heavenHellEarth: {
    title: "Heaven - Hell - Earth",
    date: new Date(2021, 3).toString(),
    description:
      'A piece in the Cloud Watching series. This work arranges spatial representations of religious verses such that the projection is of the continuum from "Heaven" to "Hell" from the perspective of "Earth"',
    type: "piece",
    parent: "cloudWatching",
    id: "heavenHellEarth",
  },
  mythHistoryHonestMistake: {
    title: "Myth - History - Honest Mistake",
    date: new Date(2021, 3).toString(),
    description:
      'A piece in the Cloud Watching series. This work arranges spatial representations of religious verses such that the projection is of the continuum from "Myth" to "History" from the perspective of "Honest Mistake"',
    type: "piece",
    parent: "cloudWatching",
    id: "mythHistoryHonestMistake",
  },
  verificationPoster1: {
    title: "They Don't Want To Be Found",
    date: new Date(2019, 1).toString(),
    description:
      'A poster created for the NSquare Nuclear Verification Poster Contest. The aim was to create a poster that would inform the general public on the process of nuclear verification, which are the rights and obligations of countries to verify that they and others are abiding by the stipulations of their nuclear weapons treaties. This poster won for "Graphic Designer\'s Choice" as judged by Michael Beirut and Ellen Lupton.',
    type: "work",
    parent: "verificationPosters",
    id: "verificationPoster1",
  },
  verificationPoster2: {
    title: "Seeing Is Believing",
    date: new Date(2019, 1).toString(),
    description:
      "A poster created for the NSquare Nuclear Verification Poster Contest. The aim was to create a poster that would inform the general public on the process of nuclear verification, which are the rights and obligations of countries to verify that they and others are abiding by the stipulations of their nuclear weapons treaties.",
    type: "work",
    parent: "verificationPosters",
    id: "verificationPoster2",
  },
  torrent: {
    title: "Torrent",
    date: new Date(2021, 9, 18).toString(),
    description: 'Acrylics on canvas. 10"x20"',
    type: "piece",
    id: "torrent",
  },
  hkProtestPoster: {
    title: "5 Demands",
    date: new Date(2019, 11).toString(),
    description: "A poster made in support of the Hong Kong protesters.",
    type: "work",
    id: "hkProtestPoster",
  },
  glasses: {
    title: "Glasses",
    date: new Date(2020, 4).toString(),
    description:
      "Illuminating the analogous differences across gender in glass.",
    type: "piece",
    id: "glasses",
  },
  midnightGrass: {
    title: "Grass at Midnight",
    date: new Date(2021, 9, 18).toString(),
    description: 'Acrylics on canvas. 10"x10"',
    type: "piece",
    id: "midnightGrass",
  },
  dovesInLightning: {
    title: "Doves in Lightning",
    date: new Date(2021, 9, 21).toString(),
    description: 'Acrylics on canvas. 18"x24"',
    type: "piece",
    id: "dovesInLightning",
  },
  butterfliesInParadise: {
    title: "Butterflies in Paradise",
    date: new Date(2021, 9, 21).toString(),
    description: 'Acrylics on canvas. 18"x24"',
    type: "piece",
    id: "butterfliesInParadise",
  },
  darkHeartBlueLine: {
    title: "Dark Heart; Blue Line",
    date: new Date(2021, 9, 20).toString(),
    description: 'Acrylics on Canvas. 18"x24"',
    type: "piece",
    id: "darkHeartBlueLine",
  },
  fracture: {
    title: "Fracture",
    date: new Date(2021, 9, 19).toString(),
    description: 'Acrylics on Canvas. 18"x24"',
    type: "piece",
    id: "fracture",
  },
  growOfN: {
    title: "Grow(N)",
    date: new Date(2019, 4).toString(),
    description:
      "Grow of N, a self-designed collection of poems tackling the transition from adolescence into adulthood. Contains ~150 poems across 200 pages. Illustrated to depict the passage of time through the stages of tree growth in Fall, Winter, and Spring.",
    type: "piece",
    id: "growOfN",
    multImgs: 11,
  },
};

const plural: Record<string, TSeries | TCollection | TAlbum> = {
  cloudWatching: {
    title: "Cloud Watching",
    date: new Date(2021, 2).toString(),
    description:
      "A series of pieces that are generated algorithmically using a Machine Learning Language System and the religious texts of the Bible, the Torah, and the Quran. The System initially encodes each verse as a point in high-dimensional space (768 dimensions), then using complexity reduction techniques folds this space down into 3 dimensions. Next, the points are projected onto a 2D plane such that the resulting projection is a view of the continuum of two points (e.g. the point representing the word Love and the point representing the word Hate) from the position of a third point (e.g. Faith). The colors are determined by the initial positions in 3D space, and the sizes are determined by the distance from the plane. In order to make as many points visible as possible, the points are drawn biggest to smallest, which is not what a literal perspective of the 3D point cloud would look like. Instead, the resulting projection is a sort of inverted perspective, with the middle on top and the edges on the bottom, as if one was looking at something through both sides of the window at once.",
    id: "cloudWatching",
    children: [
      singular.loveHateFaith,
      singular.eastWestSun,
      singular.godSatanMan,
      singular.heavenHellEarth,
      singular.mythHistoryHonestMistake,
    ] as TPiece[],
    type: "series",
  },
  memePosters: {
    title: "Meme Posters",
    date: new Date(2019, 3).toString(),
    description: "TODO",
    id: "memePosters",
    children: [
      singular.groupMentality,
      singular.fame,
      singular.celebrity,
      singular.positivity,
      singular.absurdism,
      singular.capitalism,
      singular.criticalMass,
      singular.depression,
      singular.hate,
      singular.nostalgia,
      singular.politics,
      singular.sexuality,
    ] as TWork[],
    type: "collection",
  },
  verificationPosters: {
    title: "Nuclear Verification Posters",
    date: new Date(2019, 1).toString(),
    description:
      "Posters created for the NSquare Nuclear Verification Poster Contest. The aim was to create a poster that would inform the general public on the process of nuclear verification, which are the rights and obligations of countries to verify that they and others are abiding by the stipulations of their nuclear weapons treaties.",
    id: "verificationPosters",
    children: [
      singular.verificationPoster1,
      singular.verificationPoster2,
    ] as TWork[],
    type: "collection",
  },
};

const media = { ...singular, ...plural };

export default media;
