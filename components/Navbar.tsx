"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://customer-assets.emergentagent.com/job_0c055e08-1f10-4902-90ec-7a6b67332bd2/artifacts/9amdv5ut_image.png"
            alt="MyTower"
            className="w-10 h-10 rounded-xl object-contain"
          />
          <span className="text-xl font-bold text-[#163268]">
            MyTower
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="hover:text-primary">
            Features
          </Link>
          <Link href="/modules" className="hover:text-primary">
            Modules
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
        </div>

        <Button>Get Started</Button>
      </div>
    </nav>
  );
}