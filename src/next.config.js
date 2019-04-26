const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')



// const infiProxy = () => new Proxy({}, {
//   get: infiProxy
// });
//
// window = infiProxy();
// document = infiProxy();

module.exports = withTypescript(withCSS({
  cssModules: true,
  useFileSystemPublicRoutes: false,
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    // seedorfGraphQLUrl: 'https://api.sportyspots.com/graphql',
    seedorfGraphQLUrl: 'http://localhost:8080/https://api.sportyspots.com/graphql',
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /.png|.jpg/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    });
    return config;
  }
}));

