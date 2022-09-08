import React from "react";
import { Container } from "components/styles";
import styled, { css } from "styled-components";
import { useState } from "react";

// styles

const SectionHeadline = styled.p`
   max-width: 530px;
   margin: auto;
`;

const TabBtnsContainer = styled.div`
   display: flex;
   justify-content: center;
`;

const TabBtn = styled.button`
   position: relative;
   padding: 0.5rem 2rem 1rem;
   border-bottom: 1px solid var(--cl-neutral-1);
   font-size: 18px;
   color: var(--cl-neutral-2);

   ${({ active }) =>
      active &&
      css`
         font-weight: 500;
         &::after {
            content: "";
            position: absolute;
            inset: calc(100% - 4px) 0 0 0;
            background-color: var(--cl-primary-2);
         }
      `}
`;

function FeaturesSection() {
   const featuresData = [
      {
         name: "Simple Bookmarking",
         headingName: "Bookmark in one click",
         description: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
         gives you complete control over how you manage your favourite sites.`,
         imgName: "",
         id: 0,
      },
   ];

   const [activeFeatureId, setActiveFeatureId] = useState(featuresData[0].id);

   return (
      <section>
         <Container>
            <h2 className="fs-3 text-center">Features</h2>
            <SectionHeadline className="text-center mt-3">
               Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync
               between your devices so you can access them on the go.
            </SectionHeadline>
            <TabBtnsContainer className="mt-5">
               {/* map loop on featuresData to dynamically display the buttons */}
               <TabBtn active>Simple Bookmarking</TabBtn>
               <TabBtn>Speedy Searching</TabBtn>
               <TabBtn>Easy Sharing</TabBtn>
            </TabBtnsContainer>
               {/* create instance of Feature component and pass to it the data of active feature */}
         </Container>
      </section>
   );
}

export default FeaturesSection;
