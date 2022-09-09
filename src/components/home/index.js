import React from "react";
import { Container, DemoImgContainer, PrimaryBtn } from "components/styles";
import Header from "./header";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

// styles
const StyledHome = styled.section`
   display:grid;
   min-height: 100vh;
`;
const HomeContainer = styled(Container)`
   display: grid;
   grid-template-rows: min-content 1fr;
   align-items: center;
   height: 100%;
`;
const HeroContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   gap: 2rem 1rem;
   text-align: center;

   @media (min-width: 768px) {
      flex-direction: row;
      text-align: left;
   }
`;

const LinksContainer = styled.div`
   display: flex;
   gap: 1rem;
   justify-content: center;
   @media (min-width: 768px) {
      justify-content: flex-start;
   }

   ${PrimaryBtn} {
      text-align: center;
      @media (max-width: 576px) {
         padding: 0.5rem 0.7rem;
         font-size: 0.8rem;
      }
   }
`;

const ChromeLink = styled(PrimaryBtn).attrs({ as: "a" })`
   --text-color: var(--cl-white);
   --hover-text-color: var(--cl-primary-1);
   --bg-color: var(--cl-primary-1);
   --hover-bg-color: transparent;
   --border-color: var(--cl-primary-1);
`;

const FirefoxLink = styled(PrimaryBtn).attrs({ as: "a" })`
   --text-color: var(--cl-neutral-2);
   --bg-color: var(--cl-accent-2);
   --hover-bg-color: transparent;
   --border-color: var(--cl-accent-2);
   --hover-border-color: var(--cl-neutral-2);
`;

const ImgContainer = styled(DemoImgContainer)`
   position: relative;
   order: -1;
   flex-shrink: 0;
   max-width: 500px;
   margin-bottom: 1rem;
   @media (min-width: 768px) {
      order: 0;
      width: clamp(18.75rem, 52vw, 36rem);
   }

   &:after {
      content: "";
      position: absolute;
      left: 30%;
      bottom: -1rem;
      z-index: -1;
      width: 100vw;
      height: 80%;
      background: var(--cl-primary-1);
      border-radius: 8rem 0% 0% 8rem;
   }
`;
function Home() {
   const heroImgData = useStaticQuery(graphql`
      {
         file(relativePath: { eq: "images/illustration-hero.svg" }) {
            publicURL
         }
      }
   `);

   return (
      <StyledHome>
         <HomeContainer>
            <Header />
            <HeroContainer>
               <div>
                  <h1 className="fs-2">
                     A Simple Bookmark <br /> Manager
                  </h1>
                  <p className="mt-4">
                     A clean and simple interface to organize your favourite websites. Open a new browser tab and
                     see your sites load instantly. Try it for free.
                  </p>
                  <LinksContainer className="mt-4">
                     <ChromeLink href="#">Get it on Chrome</ChromeLink>
                     <FirefoxLink href="#">Get it on Firefox</FirefoxLink>
                  </LinksContainer>
               </div>
               <ImgContainer>
                  <img src={heroImgData.file.publicURL} alt="hero" />
               </ImgContainer>
            </HeroContainer>
         </HomeContainer>
      </StyledHome>
   );
}

export default Home;
