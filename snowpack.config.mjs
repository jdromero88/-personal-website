// Example: snowpack.config.mjs
// The added "@type" comment will enable TypeScript type information via VSCode, etc.

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/' },
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-sass',
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};
