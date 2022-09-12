import React from "react";
import "globalStyles/index.scss";
import { ContactSection, DownloadSection, FAQsSection, FeaturesSection, Home, HomePageFooter, Seo } from "components";

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
            <HomePageFooter />
         </main>
      </>
   );
}

export default LandingPage;
