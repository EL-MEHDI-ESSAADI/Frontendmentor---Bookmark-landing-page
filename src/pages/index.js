import React from "react";
import "globalStyles/index.scss";
import { FeaturesSection, Home, Seo } from "components";

function LandingPage() {
   return (
      <>
         <Seo />
         <main>
            <Home />
            <FeaturesSection />
         </main>
      </>
   );
}

export default LandingPage;
