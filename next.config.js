/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["st4.depositphotos.com", "i.stack.imgur.com", "www.foot.com"], // this is just for development. prod images will prob be hosted on aws
  },
};
