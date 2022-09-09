import React from "react";
import styled from "styled-components";
import { Container } from "components/styles";
import { extensionsData } from "data";
import ExtensionCard from "./ExtensionCard";
import { graphql, useStaticQuery } from "gatsby";

const SectionDescription = styled.p`
   max-width: 48ch;
   margin: auto;
   text-align: center;
`;

const CardsContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 2rem;
`

function DownloadSection() {
   const browsersImgsData = useStaticQuery(graphql`
      {
         allFile(filter: { relativeDirectory: { eq: "images/browsers" } }) {
            nodes {
               publicURL
               name
            }
         }
      }
   `);

   const extensionCardsElements = extensionsData.map((extensionData, index) => (
      <ExtensionCard
         key={extensionData.id}
         index={index}
         browserName={extensionData.browserName}
         browserMinimumVersion={extensionData.browserMinimumVersion}
         browserImgSrc={browsersImgsData.allFile.nodes.find(({ name }) => name === extensionData.browserImgName).publicURL}
         downloadLink={extensionData.downloadLink}
      />
   ));

   return (
      <section>
         <Container>
            <h2 className="fs-3 text-center">Download the extension</h2>
            <SectionDescription className="mt-3">
               We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like
               us to prioritize.
            </SectionDescription>
            <CardsContainer className="mt-5">
					{extensionCardsElements}
				</CardsContainer>
         </Container>
      </section>
   );
}

export default DownloadSection;
