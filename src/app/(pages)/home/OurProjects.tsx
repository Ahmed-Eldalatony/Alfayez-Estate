"use client";
import { Aref_Ruqaa } from "next/font/google";
export const inriaSerif = Aref_Ruqaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});
// import { inriaSerif } from "../../layout";
import { arabicContent } from "../../lib/locale/ar";
import worker from "@/src/public/worker.jpg";
import { Button } from "@/src/components/ui/button";
import freshfish from "@/src/public/freshfish.avif";
import vegetable from "@/src/public/vegetables.jpg";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

import Section from "./ovserver";
import { ImageSlide } from "./ScrollAway";
import PropertyCard from "./PropertyCard";

import { AnimatedTextHorizontal } from "./ScrollAway";
import Image from "next/image";
import AnimatedText from "./ScrollAway";
function OurProjects() {
  const { OurProjectsSection: language } = arabicContent;
  const styleing = true;
  return (
    <div className="bg-primary-foreground h-[600px] -mt-12 rounded-3xl  cover1">
      <div className="absolute h-[650px] w-full opacity-90 bg-primary-foreground "></div>
      <div className="relative px-8  ">
        <AnimatedText
          Y={40}
          className={`text-6xl text-white   mx-auto block text-center my-12 ${inriaSerif.className}`}
          text={language.title}
        />

        <span className="absolute top-20 right-1/2 translate-x-1/2 bg-secondary block min-h-1 min-w-52"></span>
        <div className="relative z-10"></div>
        <div className="flex overflow-hidden ">
          <div
            className={cn(
              "flex justify-between gap-16 mt-20 min-w-[100%]",
              styleing && " bg-red-600"
            )}
          >
            <div className="flex flex-col">
              <p className="text-secondary text-6xl font-semibold">
                {language.projectTitle1}
              </p>
              <p className="text-white text-2xl w-[40ch] mt-8">
                {language.projectDescripoin1}
              </p>
            </div>
            <ImageSlide
              slideY={true}
              image={freshfish}
              className="rounded-2xl w-full h-[350px] object-cover"
            />
          </div>
          <div className="flex justify-between gap-16 mt-20 min-w-[100%]  ">
            <div className="flex flex-col">
              <p className="text-secondary text-6xl font-semibold">
                {language.projectTitle2}
              </p>
              <p className="text-white text-2xl w-[40ch] mt-8">
                {language.projectDescripoin2}
              </p>
            </div>
            <ImageSlide
              slideY={true}
              image={vegetable}
              className="rounded-2xl w-full h-[350px] object-cover"
            />
          </div>
        </div>
        <Link
          href={"/maintenance"}
          className="rounded-full w-fit bg-white  text-lg text-primary-foreground px-8 py-4 hover:bg-primary-foreground hover:text-white hover:opacity-100 border border-primary-foreground block leading-[5px] mx-auto mt-12 "
        >
          {language.button}
        </Link>
      </div>

      <Section />
    </div>
  );
}

export default OurProjects;
