"use client";
import React from "react";
import { Button } from "@mui/material";

export const NeoLandingPage = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/Fintara-background-gradiants-03.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Static Decorative Feather Shape */}
      <img
        src="/Neo-web-feather-shape-01.png"
        alt=""
        className="hidden md:block absolute left-0 top-0 pointer-events-none select-none"
        style={{
          width: "420px",
          height: "auto",
          zIndex: 1,
          transform: "rotate(25deg)",
          marginLeft: "-350px", 
          marginTop: "90px", 
        }}
        aria-hidden="true"
        draggable={false}
      />
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center px-2 md:px-10 py-12 mx-auto">
        <div className="flex-1 flex justify-center min-w-[340px] max-w-[500px]">
          <img
            src="/imagewithbird.png"
            alt="Neo mascot and phone"
            className="w-[410px] max-w-[97vw] md:ml-[-30px] drop-shadow-2xl"
            draggable={false}
            style={{
              userSelect: "none",
              marginLeft: 0,
              objectFit: "contain"
            }}
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start md:justify-center mt-10 md:mt-0 md:pl-10">
          <h2
            className="mb-1 text-center md:text-left"
            style={{
              fontFamily: "Roboto Condensed",
              fontWeight: 700,
              fontSize: "clamp(16px, 4vw, 17px)",
              color: "#222E3A",
              lineHeight: 1.15,
              letterSpacing: 0.2,
            }}
          >
            Not Just an Expense Tracker.
          </h2>
          <h1
            className="mb-6 text-center md:text-left"
            style={{
              fontFamily: "Archivo Black",
              fontWeight: 400,
              fontSize: "clamp(29px, 6vw, 29px)",
              letterSpacing: "0.5px",
              lineHeight: 1.1,
              textShadow: "0 2px 12px #cce6fb",
            }}
          >
            <span style={{ color: "#307CBE" }}>
              Neo is a Tool Designed to
            </span>
            <br className="hidden md:block" />
            <span style={{ color: "#4EC3EF" }}>
              Win Your Life Goals
            </span>
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-4 w-full md:w-auto">
            <span
              className="italic md:w-auto w-full text-center md:text-left"
              style={{
                fontFamily: "Roboto Condensed, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                color: "#222E3A",
                lineHeight: 1.28,
              }}
            >
              Neo always says <br />"Fly beyond your expenses"
            </span>
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                bgcolor: "#59C1FF",
                "&:hover": { bgcolor: "#2196F3" },
                fontFamily: "Roboto Condensed, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "16px",       
                borderRadius: "8px",
                px: 2,                  
                py: 0.5,                
                minWidth: "110px",      
                boxShadow: "none"
              }}
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        <div className="w-8 h-2 rounded-full bg-[#2495D7]" />
        <div className="w-2 h-2 rounded-full bg-[#90caf9]" />
        <div className="w-2 h-2 rounded-full bg-[#90caf9]" />
      </div>
    </section>
  );
};