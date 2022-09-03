import React from "react";
import "globalStyles/index.scss";
import { Home, Seo } from "components";

function LandingPage() {
   return (
      <>
         <Seo />
         <main>
            <Home />
         </main>
      </>
   );
}

export default LandingPage;
