
import NeoFaq from "@/components/home/NeoFaq";
import NeoFeatures from "@/components/home/NeoFeatures";
import { NeoLandingPage } from "@/components/home/NeoLandingPage";
import NeoLandingPagefour from "@/components/home/NeoLandingPagefour";
import NeoLandingPageSectionone from "@/components/home/NeoLandingPageSectionone";

import { NeoLandingPageTwo } from "@/components/home/NeoLandingPagetwo";
import NeoPricing from "@/components/home/NeoPricing";





export default function Page() {
  return (
    <main>
      <NeoLandingPage />
      <NeoLandingPageTwo />
      <NeoLandingPageSectionone />
      <NeoLandingPagefour />
      <NeoFeatures />
      <NeoPricing />
      <NeoFaq />
    </main>
  );
}