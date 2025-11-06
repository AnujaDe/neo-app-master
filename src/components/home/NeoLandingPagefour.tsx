"use client";
import Image from "next/image";
import React from "react";

// Data for the feature sections
const features = [
  {
    title: "Clear view of your finances.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. viverra maecenas accumsan lacus vel facilisis.",
    imageUrl: "/image1.png",
    alt: "Man reviewing finances on a large phone screen",
    reverse: false,
  },
  {
    title: "No more wasteful spending.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. viverra maecenas accumsan lacus vel facilisis.",
    imageUrl: "/image2.png",
    alt: "Woman thinking about her spending with a large phone screen",
    reverse: true,
  },
  {
    title: "Build everlasting money discipline.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. viverra maecenas accumsan lacus vel facilisis.",
    imageUrl: "/image3.png",
    alt: "Woman relaxing, showing financial peace of mind",
    reverse: false,
  },
  {
    title: "Your dreams never too big to afford",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. viverra maecenas accumsan lacus vel facilisis.",
    imageUrl: "/image4.png",
    alt: "Woman with luggage looking up at a large phone screen, symbolizing future dreams",
    reverse: true,
  },
];

// Reusable component for each feature section
const FeatureSection: React.FC<
  (typeof features)[0] & { showFeather?: boolean }
> = ({
  title,
  description,
  imageUrl,
  alt,
  reverse,
  showFeather = false,
}) => {
  const direction = reverse ? "flex-row-reverse" : "flex-row";
  return (
    <div
      className={`flex items-center justify-center gap-8 ${direction} mb-16 relative`}
      style={{ zIndex: 2 }}
    >
      {/* Feather shape after the first feature */}
      {showFeather && (
        <img
          src="/Neo-web-feather-shape-01.png"
          alt=""
          className="hidden md:block absolute left-0 top-0 pointer-events-none select-none"
          style={{
            width: "420px",
            height: "auto",
            zIndex: 1,
            transform: "rotate(25deg)",
            marginLeft: "-380px",
            marginTop: "280px",
          }}
          aria-hidden="true"
          draggable={false}
        />
      )}
      <div className="w-1/2 flex justify-center">
        <div className="bg-[#2596be] text-white p-8 rounded-2xl max-w-md relative shadow-lg">
          <h3
            className="font-bold mb-4"
            style={{
              fontFamily: "Roboto Condensed",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: "Roboto Condensed",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            {description}
          </p>
          <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-white text-[#2596be] rounded-full flex items-center justify-center text-3xl font-bold shadow">
            +
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image
          src={imageUrl}
          alt={alt}
          width={400}
          height={600}
          className="object-contain"
          draggable={false}
          style={{ userSelect: "none" }}
        />
      </div>
    </div>
  );
};

// Main component
const NeoLandingPagefour: React.FC = () => {
  return (
    <section
      className="relative w-full py-20 px-4 min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/Fintara-background-gradiants-03.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative Feather Shape on the right */}
      <img
        src="/Neo-web-feather-shape-03.png"
        alt=""
        className="hidden md:block absolute right-0 top-0 pointer-events-none select-none"
        style={{
          width: "440px",
          height: "auto",
          zIndex: 1,
          transform: "rotate(-18deg)",
          marginRight: "-190px",
          marginTop: "20px",
        }}
        aria-hidden="true"
        draggable={false}
      />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <header className="text-center mb-16">
          <p className="text-lg text-gray-600">Features that benefits you,</p>
          <h2
            className="font-bold text-[#2596be]"
            style={{
              fontFamily: "Roboto Condensed",
              fontSize: "clamp(28px, 6vw, 36px)",
              fontWeight: "bold",
            }}
          >
            Tailored by finance experts
          </h2>
        </header>
        <main>
          {features.map((feature, index) => (
            <FeatureSection
              key={index}
              {...feature}
              showFeather={index === 0}
            />
          ))}
        </main>
      </div>
      {/* Decorative dots/pagination (optional, similar to NeoLandingPage) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        <div className="w-8 h-2 rounded-full bg-[#2495D7]" />
        <div className="w-2 h-2 rounded-full bg-[#90caf9]" />
        <div className="w-2 h-2 rounded-full bg-[#90caf9]" />
      </div>
    </section>
  );
};

export default NeoLandingPagefour;