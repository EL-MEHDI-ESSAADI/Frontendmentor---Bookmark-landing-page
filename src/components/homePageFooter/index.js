import React from "react";
import styled from "styled-components";
import { Container } from "components/styles";
import { Logo } from "components";
import { navLinksData, socialMediaLinksData } from "data";

const FooterLink = styled.a`
   padding: 0.5rem;
   text-transform: uppercase;
   transition: var(--trn-fast-smooth-color);
   &:hover {
      color: var(--cl-primary-2);
   }
`;

const Nav = styled.nav`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 0.25rem;

   @media (min-width: 375px) {
      gap: 2rem;
      flex-direction: row;
   }
`;

const LinksContainer = styled.div`
   flex-grow: 1;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   gap: 0.5rem;
   @media (min-width: 576px) {
      gap: 3rem;
      flex-direction: row;
   }
`;

const FooterContainer = styled(Container)`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 1rem;

   @media (min-width: 768px) {
      gap: 3rem;
      flex-direction: row;
   }
`;

const StyledHomePageFooter = styled.footer`
   padding-block: 1.5rem;
   color: var(--cl-white);
   background-color: var(--cl-neutral-2);
`;

function HomePageFooter() {
   const navLinksElements = navLinksData.map((singleNavLink, index) => (
      <FooterLink key={index} href={singleNavLink.link}>
         {singleNavLink.text}
      </FooterLink>
   ));

   const socialMediaLinksElements = socialMediaLinksData.map((singleSocialMediaLink, index) => (
      <FooterLink key={index} href={singleSocialMediaLink.link} aria-label={singleSocialMediaLink.name}>
         <singleSocialMediaLink.Icon size="1.5rem" aria-hidden="true" />
      </FooterLink>
   ));

   return (
      <StyledHomePageFooter>
         <FooterContainer>
            <Logo light />
            <LinksContainer>
               <Nav>{navLinksElements}</Nav>
               <div className="d-flex">{socialMediaLinksElements}</div>
            </LinksContainer>
         </FooterContainer>
      </StyledHomePageFooter>
   );
}

export default HomePageFooter;
