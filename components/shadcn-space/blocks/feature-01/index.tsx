"use client";
import Feature from "@/components/shadcn-space/blocks/feature-01/feature";
import { ArrowDownUp, BellRing, RotateCw, Tag } from "lucide-react"

const featureData = [
  {
    icon: ArrowDownUp,
    content:
      "Automate maintenance billing, expense approvals, and financial tracking eliminating manual errors and delays.",
  },
  {
    icon: BellRing,
    content:
      "Instant real-time alerts for visitor entries, payments, announcements, and complaints.",
  },
  {
    icon: RotateCw,
    content:
      "Streamline daily operations with smart workflows designed specifically for residential societies.",
  },
  {
    icon: Tag,
    content:
      "Centralized resident records, vendor management, and society documents organized and secure.",
  },
];

const Feature01 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature01;
