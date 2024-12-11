require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require('./routes').default;
const Sitemap = require("react-router-sitemap").default;

new Sitemap(router)
  .build("https://jdromero88.github.io/personal-website/")
  .save("./public/sitemap.xml")
