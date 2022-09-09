import React from "react";
import { Container } from "components/styles";
import styled, { css } from "styled-components";
import { useState } from "react";
import { featuresData } from "data";
import Feature from "./Feature";

// styles

const SectionHeadline = styled.p`
   max-width: 530px;
   margin: auto;
`;

const TabBtnsContainer = styled.div`
   display: flex;
   justify-content: center;
   /* align-items: center; */
   flex-direction: column;

   @media (min-width: 576px) {
      flex-direction: row;
   }
`;

const TabBtn = styled.button`
   position: relative;
   padding: 0.5rem 0.75rem 1rem;
   border-bottom: 1px solid var(--cl-neutral-1);
   font-size: 18px;
   color: var(--cl-neutral-2);
   transition: var(--trn-fast-smooth-color);

   @media (min-width: 768px) {
      padding: 0.5rem 2rem 1rem;
      inset: calc(100% - 4px) 0 0 0;
   }

   &:hover {
      color: var(--cl-primary-2);
   }

   ${({ active }) =>
      active &&
      css`
         font-weight: 500;
         &::after {
            content: "";
            position: absolute;
            inset: calc(100% - 4px) 10% 0 10%;
            background-color: var(--cl-primary-2);

            @media (min-width: 576px) {
               inset: calc(100% - 4px) 0 0 0;
            }
         }
      `}
`;

function FeaturesSection() {
   const [activeFeatureId, setActiveFeatureId] = useState(featuresData[0].id);

   const tabBtnsElements = featuresData.map((singleFeatureData) => (
      <TabBtn key={singleFeatureData.id} onClick={()=>setActiveFeatureId(singleFeatureData.id)} active={singleFeatureData.id === activeFeatureId}>
         {singleFeatureData.name}
      </TabBtn>
   ));

   return (
      <section id="features">
         <Container>
            <h2 className="fs-3 text-center">Features</h2>
            <SectionHeadline className="text-center mt-3">
               Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync
               between your devices so you can access them on the go.
            </SectionHeadline>
            <TabBtnsContainer className="mt-5">{tabBtnsElements} </TabBtnsContainer>
            <Feature {...featuresData[activeFeatureId]} />
         </Container>
      </section>
   );
}

export default FeaturesSection;
