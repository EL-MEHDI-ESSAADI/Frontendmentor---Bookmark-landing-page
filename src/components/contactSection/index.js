import React, { useState } from "react";
import { Container, PrimaryBtn } from "components/styles";
import styled from "styled-components";
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
`;

const EmailInput = styled.input`
   width: 18rem;
   padding: 0.9rem 1rem;
   border-radius: 0.25rem;
   /* stooooped heeeree */
   ${({isUnValid}) => {}}
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
      <StyledContactSection>
         <Container>
            <Paragraph>35,000+ already joined</Paragraph>
            <h2 className="fs-3 text-white mt-4 fw-500">
               Stay up-to-date with what <br /> we’re doing
            </h2>
            <form className="mt-3 d-flex justify-content-center" onSubmit={handelSubmit} noValidate>
               <EmailInputContainer>
                  <EmailInput
                     type="email"
                     value={userEmail.value}
                     placeholder="Enter your email address"
                     onChange={handleChange}
                     isUnValid={userEmail.isUnValid}
                  />
                  {userEmail.isUnValid && <ErrorIcon size="1.5rem" aria-hidden="true" />}
               </EmailInputContainer>
               <SubmitBtn>Contact Us</SubmitBtn>
            </form>
         </Container>
      </StyledContactSection>
   );
}

export default ContactSection;
