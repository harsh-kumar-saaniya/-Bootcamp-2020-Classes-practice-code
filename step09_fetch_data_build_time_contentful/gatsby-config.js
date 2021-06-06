module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uizn0ahxtuj5`,
        accessToken: `nGsaiEnfS1wwX3wJ29bMmS5G2Xc6Qr1-aGtrIpAdQIE`,
      },
    },
  ],
};
