"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const NeoHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMobile = () => setMobileOpen(true);
  const closeMobile = () => setMobileOpen(false);
  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo: moved slightly to the right with ml-* */}
            <div className="flex items-center ml-3 md:ml-65">
              <Link href="/" className="inline-flex items-center gap-2">
                <img
                  src="/neo-logo.png"
                  alt="Neo Logo"
                  className="h-10 w-auto sm:h-12"
                />
              </Link>
            </div>

            {/* Desktop nav (hidden on small screens): nudged right with ml-* */}
            <nav
              className="hidden md:flex items-center gap-8 text-[#2A2A2A] font-medium ml-6 lg:ml-8"
              aria-label="Primary"
            >
              <Link href="#what-is-fintara" className="hover:text-[#0F172A]">
                What is Fintara?
              </Link>
              <Link href="/Features" className="hover:text-[#0F172A]">
                Features
              </Link>
              <Link href="#learn" className="hover:text-[#0F172A]">
                Learn
              </Link>
              <Link href="/Pricing" className="hover:text-[#0F172A]">
                Pricing
              </Link>
              <Link href="#refer" className="hover:text-[#0F172A]">
                Refer a friend
              </Link>
            </nav>

            {/* Right side: CTA and mobile menu button */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
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
                    minWidth: "130px",
                    boxShadow: "none",
                  }}
                >
                  Start Your Free Trial
                </Button>
              </div>

              {/* Mobile: show menu toggle. When mobileOpen is true, show CloseIcon here too */}
              <div className="md:hidden">
                <IconButton
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  onClick={toggleMobile}
                  size="large"
                >
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Fixed overlay mobile menu (does NOT affect layout or push content) */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop: clicking will close the menu and restore normal header/page */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobile}
        />

        {/* Menu panel: centered vertically with a close icon in the panel's top-right */}
        <div className="absolute inset-0 flex items-start justify-center pt-16 px-4 sm:pt-20">
          <div
            className={`w-full max-w-md rounded-lg bg-white/95 shadow-lg transform transition-transform duration-200 ${
              mobileOpen ? "translate-y-0" : "translate-y-4"
            }`}
            role="dialog"
            aria-modal="true"
          >
            {/* Panel header with explicit close (cancel) icon on top-right */}
            <div className="flex items-center justify-between p-3 border-b border-gray-100">
              <div />
              <div className="text-base font-semibold text-[#0F172A]">Menu</div>
              <div>
                <IconButton
                  aria-label="Close menu"
                  onClick={closeMobile}
                  size="small"
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </div>

            <div className="p-4">
              <nav className="flex flex-col gap-2">
                <Link
                  href="#what-is-fintara"
                  className="block rounded px-3 py-3 text-lg font-medium text-[#0F172A] hover:bg-slate-50"
                  onClick={closeMobile}
                >
                  What is Fintara?
                </Link>
                <Link
                  href="/Features"
                  className="block rounded px-3 py-3 text-lg font-medium text-[#0F172A] hover:bg-slate-50"
                  onClick={closeMobile}
                >
                  Features
                </Link>
                <Link
                  href="#learn"
                  className="block rounded px-3 py-3 text-lg font-medium text-[#0F172A] hover:bg-slate-50"
                  onClick={closeMobile}
                >
                  Learn
                </Link>
                <Link
                  href="/Pricing"
                  className="block rounded px-3 py-3 text-lg font-medium text-[#0F172A] hover:bg-slate-50"
                  onClick={closeMobile}
                >
                  Pricing
                </Link>
                <Link
                  href="#refer"
                  className="block rounded px-3 py-3 text-lg font-medium text-[#0F172A] hover:bg-slate-50"
                  onClick={closeMobile}
                >
                  Refer a friend
                </Link>

                <div className="mt-3">
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={closeMobile}
                    sx={{
                      textTransform: "none",
                      bgcolor: "#59C1FF",
                      "&:hover": { bgcolor: "#2196F3" },
                      fontFamily: "Roboto Condensed, Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      borderRadius: "8px",
                      py: 1.25,
                      boxShadow: "none",
                    }}
                  >
                    Start Your Free Trial
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NeoHeader;