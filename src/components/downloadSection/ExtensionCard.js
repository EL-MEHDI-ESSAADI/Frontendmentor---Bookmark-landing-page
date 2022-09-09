import React from "react";
import styled from "styled-components";
import { PrimaryBtn } from "components/styles";
import { graphql, useStaticQuery } from "gatsby";

const StyledExtensionCard = styled.article`
   border-radius: 1rem;
   text-align: center;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

   @media (min-width: 926px) {
      margin-top: ${({ index }) => index * 2}rem;
   }
`;

const InfoContainer = styled.div`
   border-bottom: 5px solid transparent;
   border-image: url(${({ dotsImg }) => dotsImg}) 5;
`;

const StyledBrowserImg = styled.img`
   margin-inline: auto;
`;

const DownloadLink = styled(PrimaryBtn).attrs({ as: "a" })`
   --text-color: var(--cl-white);
   --hover-text-color: var(--cl-primary-1);
   --bg-color: var(--cl-primary-1);
   --hover-bg-color: transparent;
   --border-color: var(--cl-primary-1);
`;

function ExtensionCard({ browserImgSrc, browserName, browserMinimumVersion, downloadLink, index }) {
   const dotsImgData = useStaticQuery(graphql`
      {
         file(relativePath: { eq: "images/bg-dots.svg" }) {
            publicURL
         }
      }
   `);

   return (
      <StyledExtensionCard index={index}>
         <InfoContainer className="px-5 py-4" dotsImg={dotsImgData.file.publicURL}>
            <StyledBrowserImg src={browserImgSrc} alt={browserName} />
            <h5 className="fs-5 text-capitalize mt-4">add to {browserName}</h5>
            <p className="text-capitalize mt-2">Minimum version {browserMinimumVersion}</p>
         </InfoContainer>
         <DownloadLink className="mx-4 my-4" href={downloadLink}>
            add & install extension
         </DownloadLink>
      </StyledExtensionCard>
   );
}

export default ExtensionCard;
