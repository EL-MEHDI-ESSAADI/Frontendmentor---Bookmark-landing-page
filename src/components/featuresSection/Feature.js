import React from "react";
import styled from "styled-components";
import { PrimaryBtn } from "components/styles";
import { graphql, useStaticQuery } from "gatsby";

const StyledFeature = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 3rem 4rem;

   @media (min-width: 768px) {
      flex-direction: row;
   }
`;

const ImgContainer = styled.div`
   position: relative;
   order: -1;
   max-width: 500px;
   margin-bottom: 3.5rem;
   &:after {
      content: "";
      position: absolute;
      right: 30%;
      bottom: -3.5rem;
      z-index: -1;
      width: 100vw;
      height: 80%;
      background: var(--cl-primary-1);
      border-radius: 0% 8rem 8rem 0%;
   }

`;

const FeatureInfoDescription = styled.div`
   text-align: center;
   @media (min-width: 768px) {
      flex-basis: 46ch;
      text-align: left;
   }
`;

const StyledMoreInfoBtn = styled(PrimaryBtn)`
   --text-color: var(--cl-white);
   --bg-color: var(--cl-primary-1);
   --border-color: var(--cl-primary-1);
`;

function Feature({ headingName, description, imgName }) {
   const imgData = useStaticQuery(graphql`
      {
         allFile(filter: { relativeDirectory: { eq: "images/features" } }) {
            nodes {
               publicURL
               name
            }
         }
      }
   `);

   const imgSrc = imgData.allFile.nodes.find(({ name }) => name === imgName).publicURL;

   return (
      <StyledFeature className="mt-5">
         <ImgContainer>
            <img src={imgSrc} alt={imgName} />
         </ImgContainer>
         <FeatureInfoDescription>
            <h3 className="fs-4">{headingName}</h3>
            <p className="mt-3">{description}</p>
            <StyledMoreInfoBtn className="mt-4">More info</StyledMoreInfoBtn>
         </FeatureInfoDescription>
      </StyledFeature>
   );
}

export default Feature;
