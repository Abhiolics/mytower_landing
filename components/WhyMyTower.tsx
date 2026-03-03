"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ArrowDownUp,
  BellRing,
  RotateCw,
  Tag,
  LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

type FeatureItem = {
  icon: LucideIcon;
  content: string;
};

export default function FeatureSection() {
  const featureData: FeatureItem[] = [
  {
    icon: ArrowDownUp,
    content:
      "Automate maintenance billing, expense tracking, and approvals — eliminating manual errors and delays.",
  },
  {
    icon: BellRing,
    content:
      "Real-time notifications for visitor entries, payments, complaints, and announcements — keep everyone informed instantly.",
  },
  {
    icon: RotateCw,
    content:
      "Reduce administrative workload with smart automation designed specifically for residential communities.",
  },
  {
    icon: Tag,
    content:
      "Centralized and organized records for residents, vendors, finances, and society documents — all in one secure platform.",
  },
];

  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col gap-8 md:gap-12">

            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-4"
            >
              <div className="flex flex-col gap-4 max-w-full items-center md:items-start text-center md:text-left md:max-w-xl">
             <Badge
  variant="outline"
  className="px-3 py-1 h-auto text-sm font-normal"
>
  Why MyTower
</Badge>

<h2 className="text-3xl md:text-4xl font-semibold">
  Built for Modern Residential Communities
</h2>

<p className="text-lg font-normal text-muted-foreground">
  MyTower simplifies society management with transparency, automation,
  and real-time control — empowering committees, admins, and residents.
</p>
              </div>

              <Button className="rounded-full px-5 py-2.5 shadow-xs h-auto cursor-pointer">
                Browse more block
              </Button>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">

              {/* Left Testimonial Card */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="p-6 sm:p-16 rounded-2xl bg-[url('https://images.shadcnspace.com/assets/feature/feature-01-img.webp')] bg-cover bg-center bg-no-repeat"
              >
                <Card className="flex items-start gap-12 border-none shadow-none ring-0 rounded-lg pt-6 sm:py-10">
                  <CardContent className="flex flex-col gap-6 px-6 sm:px-8">
                    <Avatar className="size-12">
                      <AvatarFallback>
                        <img
                          src="https://images.shadcnspace.com/assets/profiles/user-1.jpg"
                          alt="User"
                          className="rounded-full"
                        />
                      </AvatarFallback>
                    </Avatar>

                    <h3 className="text-xl sm:text-2xl font-medium">
                      “Before Shadcn Space, we stitched UIs together from random
                      snippets. Now we ship polished interfaces in hours for
                      frontend.”
                    </h3>
                  </CardContent>

                  <CardFooter className="bg-card border-none w-full px-6 sm:px-8 py-0 flex flex-col items-start gap-0.5">
                    <p className="text-sm font-medium text-primary">
                      JOHNATHAN DOE
                    </p>
                    <span className="text-xs font-normal text-muted-foreground uppercase">
                      HEAD OF FINANCE @SHADCN SPACE
                    </span>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Right Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                {featureData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: [0.21, 0.47, 0.32, 0.98],
                      delay: index * 0.1,
                    }}
                  >
                    <Card className="py-8 bg-muted border-0 ring-0 h-full hover:shadow-md transition">
                      <CardContent className="w-full h-full px-8 flex flex-col items-start gap-12 justify-between">
                        <item.icon
                          className="w-6 h-6 text-muted-foreground"
                          strokeWidth={1.5}
                        />
                        <p className="text-base text-primary font-normal">
                          {item.content}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}