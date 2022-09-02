import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

function Seo() {
   const data = useStaticQuery(graphql`
      {
         logo: file(relativePath: { eq: "images/favicon.png" }) {
            childImageSharp {
               gatsbyImageData
            }
         }

         site {
            siteMetadata {
               title
               siteUrl
               siteType
               description
               bigDescription
               smallDescription
               twitterUserName
            }
         }
      }
   `);

   const logo = data.logo.childImageSharp.gatsbyImageData.images.fallback.src;
   const { title, siteUrl, bigDescription, smallDescription, twitterUserName, siteType } = data.site.siteMetadata;

   return (
      <Helmet>
         <title>{title}</title>
         <meta name="description" content={bigDescription} />
         {/*  Open Graph Meta Tags and Twitter Cards */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:site" content={twitterUserName} />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={smallDescription} />
         <meta name="twitter:image" content={siteUrl + logo} />

         <meta property="og:type" content={siteType} />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={smallDescription} />
         <meta property="og:url" content={siteUrl} />
         <meta property="og:image" content={logo} />
         <meta property="og:image: alt" content="logo" />
      </Helmet>
   );
}

export default Seo;
