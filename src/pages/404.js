import React from "react";
import { Seo } from "components";
import { Link } from "gatsby";
import styled from "styled-components";
import "globalStyles/index.scss";
import { Container, PrimaryBtn } from "components/styles";

const HomeLink = styled(PrimaryBtn).attrs({ as: Link })`
   --text-color: var(--cl-white);
   --hover-text-color: var(--cl-primary-1);
   --bg-color: var(--cl-primary-1);
   --hover-bg-color: transparent;
   --border-color: var(--cl-primary-1);
`;

const StyledNotFoundPage = styled(Container)`
   min-height: 100vh;
   display: grid;
   place-content: center;
   place-items: center;
   text-align: center;
`;

function NotFoundPage() {
   return (
      <>
         <Seo />
         <StyledNotFoundPage>
            <h1 className="fs-1">Look like you're lost</h1>
            <p className="fs-4 mt-3">The page you are looking for not available!</p>
            <HomeLink to="/" className="mt-5">
               Go to Home
            </HomeLink>
         </StyledNotFoundPage>
      </>
   );
}

export default NotFoundPage;
