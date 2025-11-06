"use client";
import Image from "next/image";
import React from "react";

// Data for the feature cards
const featuresData = [
  {
    title: "High-class security",
    description: "Data encryption & 2FA",
    isHighlighted: false,
  },
  {
    title: "Ad-free",
    description: "No third party products or popups. (demo version)",
    isHighlighted: false,
  },
  {
    title: "World-class Support",
    description: "wonderful human beings just waiting to help you.",
    isHighlighted: true,
  },
  {
    title: "Stay synced",
    description: "cross platform usability",
    isHighlighted: false,
  },
  {
    title: "Category customization",
    description: "custom categories & tags",
    isHighlighted: false,
  },
  {
    title: "Visualized goal tracking",
    description: "visual progress & milestones",
    isHighlighted: false,
  },
  {
    title: "User friendly finance reporting",
    description: "clear charts & exportable reports",
    isHighlighted: false,
  },
];

type Feature = {
  title: string;
  description: string;
  isHighlighted: boolean;
};

// Reusable component for each feature card
const FeatureCard: React.FC<Feature> = ({ title, description, isHighlighted }) => {
  const base =
    "p-4 rounded-2xl shadow-md transition transform hover:-translate-y-1 duration-150";
  const highlightedClasses = "bg-white text-gray-800";
  const regularClasses = "bg-blue-400 bg-opacity-40 text-white";

  return (
    <div
      className={`${base} ${isHighlighted ? highlightedClasses : regularClasses}`}
      role="article"
      aria-label={title}
    >
      <h3
        className="text-base"
        style={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 700,
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm mt-1"
        style={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
        }}
      >
        {description}
      </p>
    </div>
  );
};

// Main component
const NeoFeatures: React.FC = () => {
  return (
    <section
      className="relative w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8"
      style={{ backgroundColor: "#2A7AB2" }} // maintain the solid color background
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Left side: Header and Features Grid */}
          <div className="w-full lg:w-2/3">
            <header className="mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-white/90">Other features</p>
              <h2
                className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mt-2 text-white"
                style={{ fontFamily: "Roboto Condensed, sans-serif" }}
              >
                You won't miss a thing
                <br /> with Neo
              </h2>
            </header>

            <main className="w-full">
              {/* Responsive grid:
                  - mobile: 1 column
                  - sm: 2 columns
                  - md: 3 columns
                  - lg: 4 columns with the highlighted layout preserved visually
              */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {featuresData.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </main>
          </div>

          {/* Right side: Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            {/* Use responsive sizing for the image container so it scales on smaller screens */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px]">
              <Image
                src="/image6V2.png"
                alt="Woman using a large phone"
                fill={false}
                width={400}
                height={600}
                className="object-contain"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeoFeatures;