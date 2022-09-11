import React from "react";
import "globalStyles/index.scss";
import { ContactSection, DownloadSection, FAQsSection, FeaturesSection, Home, Seo } from "components";

function LandingPage() {
   return (
      <>
         <Seo />
         <main>
            <Home />
            <FeaturesSection />
            <DownloadSection />
            <FAQsSection />
            <ContactSection />
         </main>
      </>
   );
}

export default LandingPage;
