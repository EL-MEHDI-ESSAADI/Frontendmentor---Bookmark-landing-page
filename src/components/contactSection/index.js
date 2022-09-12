import React, { useState } from "react";
import { Container, PrimaryBtn } from "components/styles";
import styled, { css } from "styled-components";
import { MdError } from "react-icons/md";
import { regexEmailValidation } from "data";

const DEFAULT_USER_EMAIL = { value: "", isUnValid: undefined };

// styles

const SubmitBtn = styled(PrimaryBtn)`
   --text-color: var(--cl-white);
   --hover-text-color: var(--cl-primary-2);
   --bg-color: var(--cl-primary-2);
   --hover-bg-color: var(--cl-white);
   --border-color: var(--cl-primary-2);
   --outline-color: var(--cl-black);

   padding: .67rem 1.2rem;
`;

const ErrorIcon = styled(MdError)`
   position: absolute;
   top: 50%;
   right: 0.8rem;
   color: var(--cl-primary-2);
   transform: translateY(-50%);
`;

const EmailInputContainer = styled.div`
   position: relative;

   &::after {
      content: "Whoops, make sure it's an email";
      position: relative;
      display: ${({ isUnValid }) => (isUnValid ? "block" : "none")};
      width: 100%;
      padding: 0.5rem 0.8rem;
      border-radius: 0 0 0.25rem 0.25rem;
      text-align: left;
      font-size: 14px;
      font-style: italic;
      background-color: var(--cl-primary-2);
   }
`;

const EmailInput = styled.input`
   width: 100%;
   padding: 0.9rem 1rem;
   border-radius: 0.25rem;
   outline: none !important;
   border: 2px solid transparent;
   &:focus {
      border-color: var(--cl-black);
   }
   ${({ isUnValid }) =>
      isUnValid &&
      css`
         border-color: var(--cl-primary-2) !important;
         border-radius: 0.25rem 0.25rem 0 0;
      `}

   @media (min-width: 576px) {
      width: 18rem;
   }
`;

const Form = styled.form`
   display: flex;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;
   @media (min-width: 576px) {
      flex-direction: row;
      align-items: flex-start;
   }
`;

const Paragraph = styled.p`
   font-size: 14px;
   font-weight: 500;
   letter-spacing: 4px;
   text-transform: uppercase;
`;

const StyledContactSection = styled.section`
   padding-block: 3rem !important;
   text-align: center;
   color: var(--cl-white);
   background-color: var(--cl-primary-1);
`;

function ContactSection() {
   const [userEmail, setUserEmail] = useState(DEFAULT_USER_EMAIL);

   function handleChange(e) {
      setUserEmail((oldUserEmail) => ({ value: e.target.value, isUnValid: undefined }));
   }

   function handelSubmit(e) {
      e.preventDefault();
      setUserEmail(
         regexEmailValidation.test(userEmail.value)
            ? DEFAULT_USER_EMAIL
            : (oldUserEmail) => ({ ...oldUserEmail, isUnValid: true })
      );
   }

   return (
      <StyledContactSection id="contact">
         <Container>
            <Paragraph>35,000+ already joined</Paragraph>
            <h2 className="fs-3 text-white mt-4 fw-500">
               Stay up-to-date with what <br /> we’re doing
            </h2>
            <Form className="mt-3" onSubmit={handelSubmit} noValidate>
               <EmailInputContainer isUnValid={userEmail.isUnValid}>
                  <div className="position-relative">
                     <EmailInput
                        type="email"
                        value={userEmail.value}
                        placeholder="Enter your email address"
                        onChange={handleChange}
                        isUnValid={userEmail.isUnValid}
                     />
                     {userEmail.isUnValid && <ErrorIcon size="1.5rem" aria-hidden="true" />}
                  </div>
               </EmailInputContainer>
               <SubmitBtn>Contact Us</SubmitBtn>
            </Form>
         </Container>
      </StyledContactSection>
   );
}

export default ContactSection;
