import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { fAQsData } from "data";
import { Container, PrimaryBtn } from "components/styles";
import { Accordion } from "components";

const StyledFAQsSection = styled.section`
   max-width: 57ch;
   margin-inline: auto;
`;

const StyledMoreInfoBtn = styled(PrimaryBtn)`
   --text-color: var(--cl-white);
   --bg-color: var(--cl-primary-1);
   --border-color: var(--cl-primary-1);

   display: block;
   margin-inline: auto;
`;


function FAQsSection() {
   const [activeQuestionId, setActiveQuestionId] = useState();

   const questionsAccordionsElements = fAQsData.map((fAQData) => (
      <Accordion
         key={fAQData.id}
         setActiveQuestionId={setActiveQuestionId}
         isActive={activeQuestionId === fAQData.id}
         {...fAQData}
      />
   ));
   return (
      <StyledFAQsSection id="FAQs">
         <Container>
            <h2 className="fs-3 text-center">Frequently Asked Questions</h2>
            <p className="mt-3 text-center">
               Here are some of our FAQs. If you have any other questions you’d like answered please feel free to
               email us.
            </p>
            <div className="pt-5">{questionsAccordionsElements}</div>
            <StyledMoreInfoBtn className="mt-5">More info</StyledMoreInfoBtn>
         </Container>
      </StyledFAQsSection>
   );
}

export default FAQsSection;
