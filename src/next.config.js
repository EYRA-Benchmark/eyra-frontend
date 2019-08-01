// @ts-ignore
const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");

// const infiProxy = () => new Proxy({}, {
//   get: infiProxy
// });
//
// window = infiProxy();
// document = infiProxy();

module.exports = withTypescript(withCSS({
  cssLoaderOptions: {
    localIdentName: "[name]__[local]--[hash:base64:5]",
  },
  cssModules: true,

  publicRuntimeConfig: {
    backendURL: process.env.EYRA_BACKEND_URL || "https://api.staging.eyrabenchmark.net/api/v1/",
    frontendURL: process.env.EYRA_FRONTEND_URL || "https://www.eyrabenchmark.net/",
    prismicEndpoint: process.env.PRISMIC_URL || "https://eyra-test.prismic.io/api/v2",
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  useFileSystemPublicRoutes: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /.png|.jpg/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "file-loader",
          options: {},
        },
      ],
    });
    return config;
  },
}));
