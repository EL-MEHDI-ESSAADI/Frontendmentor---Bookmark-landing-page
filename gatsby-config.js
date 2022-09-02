module.exports = {
   siteMetadata: {
      title: "bookmark landing page",
      siteUrl: `https://X`,
      siteType: "challenge",
      bigDescription:
         "bookmark landing page challenge from frontendmentor",
      smallDescription: "bookmark landing page challenge from frontendmentor",
      twitterUserName: "@Von__Mehdi",
   },
   plugins: [
      "gatsby-plugin-styled-components",
      "gatsby-plugin-sass",
      "gatsby-plugin-resolve-src",
      "gatsby-plugin-netlify",
      "gatsby-plugin-react-helmet",
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `assets`,
            path: `${__dirname}/src/assets/`,
         },
      },
      "gatsby-plugin-image",
      "gatsby-transformer-sharp",
      {
         resolve: "gatsby-plugin-sharp",
         options: {
            defaults: {
               placeholder: "blurred",
               backgroundColor: `transparent`,
            },
         },
      },
      {
         resolve: "gatsby-plugin-react-svg",
         options: {
            rule: {
               include: /assets/,
            },
         },
      },
      {
         resolve: "gatsby-plugin-manifest",
         options: {
            icon: "src/assets/images/favicon.png",
         },
      },
   ],
};
