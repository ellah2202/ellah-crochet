"use client"
import {
  BellIcon,
  CalendarIcon,
  GlobeIcon,
  HeartFilledIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import SparklesText from "./ui/sparkles-text";
import { IconHeartFilled, } from "@tabler/icons-react";

const features = [
  {
    Icon: IconHeartFilled,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: HeartFilledIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: BellIcon,
    name: "Another Card 1",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "#",
    cta: "Interresse",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5",
  },
  {
    Icon: BellIcon,
    name: "Another Card 2",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "#",
    cta: "Interresse",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-5",
  },
  {
    Icon: BellIcon,
    name: "Another Card 3",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "#",
    cta: "Interresse",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-5 lg:row-start-4 lg:row-end-5",
  },
];


export function BentoDemo() {
  return (
    <div id="truc">
      <SparklesText text="Produits Disponible" className="flex items-center justify-center m-4" />
      <BentoGrid className="lg:grid-rows-4">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
