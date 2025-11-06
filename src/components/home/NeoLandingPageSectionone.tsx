"use client";
import Image from 'next/image';
import React from 'react';

const NeoLandingPageSectionone: React.FC = () => {
  return (
    <section>
      <Image
        src="/sectionImage.png"
        alt="Shopping experience"
        width={1920} 
        height={1080}
        layout="responsive"
      />
    </section>
  );
};

export default NeoLandingPageSectionone;