"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-white/60 shadow-lg"
            : "backdrop-blur-md bg-white/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://customer-assets.emergentagent.com/job_0c055e08-1f10-4902-90ec-7a6b67332bd2/artifacts/9amdv5ut_image.png"
              alt="MyTower"
              className="w-10 h-10 rounded-xl object-contain"
            />
            <Link href="/" className="text-xl font-semibold tracking-tight text-[#694CD0]">

            <span className="text-xl font-semibold tracking-tight text-[#694CD0]">
              MyTower
            </span>
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {["Features", "Modules", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-foreground hover:text-[#694CD0] transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#694CD0] to-purple-400 transition-all duration-300 hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Button
            className="bg-[#694CD0] hover:bg-[#5c40b8] text-white h-12 shadow-md hover:shadow-lg transition"
          >
            Get Started
          </Button>

        </div>

        {/* Gradient Scroll Progress */}
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-[#694CD0] via-purple-400 to-indigo-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>
    </>
  );
}