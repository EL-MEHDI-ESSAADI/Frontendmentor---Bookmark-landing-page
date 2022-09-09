import React from "react";
import "globalStyles/index.scss";
import { DownloadSection, FeaturesSection, Home, Seo } from "components";

function LandingPage() {
   return (
      <>
         <Seo />
         <main>
            <Home />
            <FeaturesSection />
            <DownloadSection />
         </main>
      </>
   );
}

export default LandingPage;
