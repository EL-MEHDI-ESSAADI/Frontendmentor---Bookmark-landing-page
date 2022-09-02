import React from "react";
import "globalStyles/index.scss";
import { Header, Seo } from "components";

function LandingPage() {
   return (
      <>
         <Seo />
         <main>
            <Header />
         </main>
      </>
   );
}

export default LandingPage;
