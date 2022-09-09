import React from "react";
import styled, { css } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";

const StyledAccordion = styled.article`
   --border-value: 1.5px solid var(--cl-accent-3);
   border-bottom: var(--border-value);
   transition: 0.2s ease-in-out;
   overflow: hidden;
   &:first-child {
      border-top: var(--border-value);
   }
`;

const Question = styled.h5`
   transition: var(--trn-fast-smooth-color);
`;

const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 2rem;
   padding-block: 1rem;
   cursor: pointer;

   &:hover {
      ${Question} {
         color: var(--cl-primary-2);
      }
   }
`;

const Arrow = styled(IoIosArrowDown)`
   color: var(--cl-primary-1);
   transition: var(--trn-fast-smooth-color);

   ${({ isActive }) =>
      isActive &&
      css`
         color: var(--cl-primary-2);
         transform: rotate(-180deg);
      `}
`;

function Accordion({ question, answer, isActive, id, setActiveQuestionId }) {
   const headerRef = useRef();
   const answerParagraphRef = useRef();
   const accordionRef = useRef();

   useLayoutEffect(() => {
      setAccordionHeight();
   }, [isActive]);

   useEffect(() => {
      window.addEventListener("resize", setAccordionHeight);
      return () => window.removeEventListener("resize", setAccordionHeight);
   }, []);

   function handelClick() {
      setActiveQuestionId(isActive ? null : id);
   }

   function setAccordionHeight() {
      accordionRef.current.style.height = isActive
         ? headerRef.current.offsetHeight + answerParagraphRef.current.offsetHeight + "px"
         : headerRef.current.offsetHeight + "px";
   }

   return (
      <StyledAccordion ref={accordionRef}>
         <Header ref={headerRef} role="button" onClick={handelClick}>
            <Question className="fs-5 fw-400">{question}</Question>
            <Arrow isActive={isActive} size="1.5rem" />
         </Header>
         <p ref={answerParagraphRef} className="py-3">
            {answer}
         </p>
      </StyledAccordion>
   );
}

export default Accordion;
