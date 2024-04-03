"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
 
const content = [
  {
    title: "Effortless Inventory Control",
    description:
      "Gain instant insights into your stock levels, preventing overstock or stockouts. The app empowers you with dynamic control over inventory, ensuring optimal levels for smooth business operations.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/inventory.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Precision Order Management",
    description:
      "From order creation to shipment, GlobalSuite ERP automates the entire order fulfillment process. Enjoy improved accuracy, reduced processing times, and delighted customers.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/POM.png"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Serial & Category Tracking",
    description:
      "Address traceability requirements with ease. Track inventory by serial numbers or category, ensuring compliance and transparency in industries with stringent regulations.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/tracking.png"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "User-Friendly Interface",
    description:
      "Designed for accessibility, the app boasts an intuitive design, ensuring ease of use and navigation. This user-friendly approach extends its utility even to those less acquainted with ERP software, making it an inclusive tool for diverse teams",
    content: (
        <Image
        src="/user.png"
        width={400}
        height={400}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
];
export function Benefits() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}