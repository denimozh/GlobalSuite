import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import Link from "next/link";
 
export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden w-full text-4xl">
      <MacbookScroll
        title={
          <span className="flex flex-col gap-1">
            <a className="text-[65px]">Manage all your supply chains</a> <br /> <a className="text-3xl text-slate-300">(From the comfort of your laptop)</a>
          </span>
        }
        src={`/dashboard.png`}
        showGradient={true}
      />
    </div>
  );
}