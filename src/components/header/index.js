import React from "react";
import { Container } from "components/styles";
import Logo from "components/logo";
import styled from "styled-components";
import { navLinksData } from "data";
import { FiMenu } from "react-icons/fi";

const StyledHeader = styled.header`
   padding-block: 2rem;
   color: var(--cl-neutral-2);
`;

const StyledContainer = styled(Container)`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 1rem;
`;

const LogoAndBurgerBtnContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`;

const BurgerBtn = styled.button`
   font-size: 1.5rem;
   display: none;

   @media (max-width: 767.99px) {
      display: block;
   }
`;

const Nav = styled.nav`
   display: flex;
   align-items: center;
   gap: 1rem;

   @media (max-width: 767.99px) {
      position: absolute;
      flex-direction: column;
      top: 100%;
      right: 0;
      width:300px;
      color: var(--cl-white);
      padding-block: 1.5rem;
      background-color: var(--cl-primary-1);
   }
`;

const NavLink = styled.a`
   padding: 0.5rem;
   text-transform: uppercase;
   font-weight: 500;
   transition: var(--trn-fast-smooth-color);
   &:hover {
      color: var(--cl-primary-2);
   }
`;

const LoginBtn = styled.button`
   padding: 0.5rem 2rem;
   border: 2px solid var(--cl-primary-2);
   border-radius: 0.3rem;
   font-weight: 500;
   letter-spacing: 1px;
   text-transform: uppercase;
   color: var(--cl-white);
   background-color: var(--cl-primary-2);
   box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
   transition: var(--trn-fast-smooth-color);

   &:hover {
      color: var(--cl-primary-2);
      background-color: transparent;
   }
`;

function Header() {
   const navLinksElements = navLinksData.map((singleNavLinkData, index) => (
      <NavLink key={index} href={singleNavLinkData.link}>
         {singleNavLinkData.text}
      </NavLink>
   ));

   return (
      <StyledHeader>
         <StyledContainer>
            <LogoAndBurgerBtnContainer>
               <Logo />
               <BurgerBtn aria-label="open menu">{<FiMenu aria-hidden="true" />}</BurgerBtn>
            </LogoAndBurgerBtnContainer>
            <Nav>
               {navLinksElements}
               <LoginBtn>login</LoginBtn>
            </Nav>
         </StyledContainer>
      </StyledHeader>
   );
}

export default Header;
