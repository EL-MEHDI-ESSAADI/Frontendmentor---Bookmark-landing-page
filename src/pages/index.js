import React from "react";
import "globalStyles/index.scss";
import { DownloadSection, FAQsSection, FeaturesSection, Home, Seo } from "components";

function LandingPage() {
   return (
      <>
         <Seo />
         <main>
            <Home />
            <FeaturesSection />
            <DownloadSection />
            <FAQsSection />
         </main>
      </>
   );
}

export default LandingPage;
