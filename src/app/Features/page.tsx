import React from 'react';
import NeoFeatures from '@/components/home/NeoFeatures';
import { NeoLandingPageTwo } from '@/components/home/NeoLandingPagetwo';
import NeoLandingPageSectionone from '@/components/home/NeoLandingPageSectionone';
import NeoLandingPagefour from '@/components/home/NeoLandingPagefour';


const FeaturesPage: React.FC = () => {
  return (
    <div>
      <NeoLandingPageTwo />
      <NeoLandingPageSectionone />
      <NeoLandingPagefour />
      <NeoFeatures />
    </div>
  );
};

export default FeaturesPage;