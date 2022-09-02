import React from "react";
import {  Seo } from "components";
import { Link } from "gatsby";
import styled from "styled-components";
import "globalStyles/index.scss";

const StyledPageNotFound = styled.div`
   min-height: 100vh;
   display: grid;
   place-content: center;
   place-items: center;
`;

function PageNotFound() {
   return (
      <>
         <Seo />
         <StyledPageNotFound>
            <h1 className="fs-1">Look like you're lost</h1>
            <p className="fs-4 mt-3">the page you are looking for not available!</p>
            <button to="/" as={Link} className="mt-5">
               Go to Home
            </button>
         </StyledPageNotFound>
      </>
   );
}

export default PageNotFound;
