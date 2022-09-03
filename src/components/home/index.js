import React from "react";
import { Container } from "components/styles";
import Header from "./header";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

// styles
const StyledHome = styled.section`
   position: relative;
`
const HomeContainer = styled(Container)`
   display: grid;
   grid-template-rows: min-content 1fr;
   align-items: center;
   min-height: 100vh;
`
const HeroContainer = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 1rem;
`;

const ImgContainer = styled.div`

// stooped heree
   &:after {
      content: "";
      position: absolute;
   }

`

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
                  <h1 className="fs-2">A Simple Bookmark Manager</h1>
                  <p>
                     A clean and simple interface to organize your favourite websites. Open a new browser tab and
                     see your sites load instantly. Try it for free.
                  </p>
                  <div>
                     <a href="#">Get it on Chrome</a>
                     <a href="#">Get it on Firefox</a>
                  </div>
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
