"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import SeamlessCloud from "@/components/shadcn-space/blocks/hero-02/seamless-cloud";
import { Users, ShieldCheck, CreditCard, Building2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "motion/react";

const platformHighlights = [
  {
    icon: Users,
    label: "10,000+ Residents Managed",
    className: "border-e border-b",
  },
  {
    icon: ShieldCheck,
    label: "Advanced Security & Visitor Control",
    className: "border-b",
  },
  {
    icon: CreditCard,
    label: "Seamless Online Payments",
    className: "border-e",
  },
  {
    icon: Building2,
    label: "100+ Societies Trust MyTower",
    className: "",
  },
];

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef}>
      <div className="bg-[url(https://images.shadcnspace.com/assets/backgrounds/real-estate-bg.webp)] bg-contain bg-center bg-repeat overflow-hidden relative flex flex-col xl:h-screen justify-center z-10 xl:gap-0 gap-12">
        
        {/* Left Content */}
        <div className="max-w-7xl mx-auto sm:px-16 px-4 w-full xl:pt-0 pt-32">
          <div className="relative text-white text-start z-30">
            
            <p className="text-xs font-normal tracking-wide uppercase opacity-80">
              Smart Society Management Platform
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mt-2 mb-6 max-w-2xl">
              Simplify Your <br /> <span className="font-semibold">Society Operations</span>
            </h1>

            <p className="max-w-xl text-white/80 mb-8 text-lg">
              MyTower transforms residential community management with automation,
              transparency, and real-time control — built for committees,
              admins, and residents.
            </p>

            <Button className="px-8 py-4 bg-white text-black hover:bg-white/80 font-medium rounded-full h-auto">
              Request a Demo
            </Button>

          </div>
        </div>

        {/* Right Highlights Section */}
        {/* Right Section */}
<div className="xl:absolute bottom-0 right-0 z-30 xl:w-auto lg:w-4/5 w-full lg:ms-auto">
  <div className="relative">

    {/* Image - Medium Proper Size */}
    <div className="xl:absolute bottom-24 right-0 z-0 hidden md:block">
      <img
        src="/hero.png"
        alt="Modern Residential Building"
        className="w-[520px] lg:w-[620px] xl:w-[700px] h-auto object-contain drop-shadow-2xl"
      />
    </div>

    {/* Bottom Stats Card */}
    <div className="bg-background rounded-t-2xl xl:rounded-none xl:rounded-tl-2xl sm:py-10 py-6 sm:ps-12 ps-4 sm:pe-12 pe-4 xl:pe-60 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-0 sm:flex sm:items-center justify-center sm:gap-10 sm:text-center"
      >
        {platformHighlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1 + index * 0.2,
              ease: "easeInOut",
            }}
            className="flex sm:gap-10"
          >
            <div
              className={`flex flex-col items-center gap-3 sm:py-0 sm:px-0 py-5 px-8 sm:border-0 border-gray-200 dark:border-gray-700 w-full ${item.className}`}
            >
              <item.icon size={28} className="text-foreground" />
              <p className="text-sm font-normal text-muted-foreground text-center">
                {item.label}
              </p>
            </div>

            {index < platformHighlights.length - 1 && (
              <Separator
                orientation="vertical"
                className="h-12 my-auto sm:block hidden"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>

  </div>
</div>

        {/* Decorative Clouds */}
        <SeamlessCloud
          cloudCount={2}
          minSize={400}
          maxSize={678}
          opacity="opacity-60"
          gapMin={100}
          gapMax={500}
          top="top-56 sm:top-40 left-0"
        />
      </div>
    </section>
  );
};

export default HeroSection;