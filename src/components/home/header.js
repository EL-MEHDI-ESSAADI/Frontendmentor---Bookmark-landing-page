import React from "react";
import Logo from "components/logo";
import styled, { css } from "styled-components";
import { navLinksData } from "data";
import { FiMenu } from "react-icons/fi";
import { useReducer } from "react";
import { PrimaryBtn } from "components/styles";

// styles
const StyledHeader = styled.header`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 1rem;
   padding-block: 2rem;
   color: var(--cl-neutral-2);
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
   --cl-mobile-bg: var(--cl-accent-1);
   position: relative;
   display: flex;
   align-items: center;
   gap: 1rem;

   @media (max-width: 767.99px) {
      ${({ show }) =>
         !show
            ? css`
                 display: none;
              `
            : null}
      position: absolute;
      z-index: var(--zIndex-dropdown);
      flex-direction: column;
      top: calc(100% - 0.7rem);
      right: 0.8rem;
      width: 300px;
      color: var(--cl-white);
      padding-block: 1.5rem;
      background-color: var(--cl-mobile-bg);

      &:after {
         content: "";
         position: absolute;
         right: 0;
         bottom: 100%;
         border: 25px solid;
         border-color: transparent var(--cl-mobile-bg) transparent transparent;
         transform: translateY(50%);
      }
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

const LoginBtn = styled(PrimaryBtn)`
   --text-color: var(--cl-white);
   --hover-text-color: var(--cl-primary-2);
   --bg-color: var(--cl-primary-2);
   --hover-bg-color: transparent;
   --border-color: var(--cl-primary-2);

   padding-inline: 2rem;
   text-transform: uppercase;
   letter-spacing: 1px;
`;

// components
function Header() {
   const [showNav, toggleNav] = useReducer((state) => !state, false);

   const navLinksElements = navLinksData.map((singleNavLinkData, index) => (
      <NavLink key={index} href={singleNavLinkData.link}>
         {singleNavLinkData.text}
      </NavLink>
   ));

   return (
      <StyledHeader>
         <LogoAndBurgerBtnContainer>
            <Logo />
            <BurgerBtn aria-label="open menu" onClick={toggleNav}>
               {<FiMenu aria-hidden="true" />}
            </BurgerBtn>
         </LogoAndBurgerBtnContainer>
         <Nav show={showNav}>
            {navLinksElements}
            <LoginBtn>login</LoginBtn>
         </Nav>
      </StyledHeader>
   );
}

export default Header;
