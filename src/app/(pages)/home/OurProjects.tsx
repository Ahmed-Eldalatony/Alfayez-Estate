"use client";
import { Aref_Ruqaa } from "next/font/google";
export const inriaSerif = Aref_Ruqaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import { inriaSerif } from "../../layout";
import { arabicContent } from "../../lib/locale/ar";
import worker from "@/src/public/worker.jpg";
import { Button } from "@/src/components/ui/button";
import freshfish from "@/src/public/freshfish.avif";
import vegetable from "@/src/public/vegetables.jpg";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

import { ImageSlide } from "./ScrollAway";
import PropertyCard from "./PropertyCard";
const imgArr = [freshfish, vegetable];
import { AnimatedTextHorizontal } from "./ScrollAway";
import Image from "next/image";
import AnimatedText from "./ScrollAway";
function OurProjects() {
  const { OurProjectsSection: language } = arabicContent;
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div className=" mt-[-120vh] rounded-3xl max-h-[700vh] ">
      {/* <div className="absolute h-[650px] w-full opacity-90 bg-primary-foreground "></div> */}
      <div className="relative   ">
        {/* <span className="absolute top-20 right-1/2 translate-x-1/2 bg-secondary block min-h-1 min-w-52"></span> */}
        <div className="relative z-10 "></div>
        <div className=" ">
          <div dir="ltr">
            <motion.div
              className="h-full"
              initial={{ y: "-200vh" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1 }}
            >
              <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                  <div className="relative  ">
                    {/* <AnimatedText
                      Y={40}
                      className={`text-6xl text-white   mx-auto block text-center my-12 ${inriaSerif.className}`}
                      text={language.title}
                    />

                    <span className="absolute top-20 right-1/2 translate-x-1/2 bg-secondary block min-h-1 min-w-52"></span> */}
                    {/* مشاريعنا */}
                  </div>
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                  <div className="relative px-8  ">
                    <AnimatedText
                      Y={40}
                      className={`text-8xl text-primary   ml-auto block text-center  ${inriaSerif.className}`}
                      text={language.title}
                    />

                    <span className="absolute right-1/2 translate-x-1/2 bg-secondary block min-h-1 min-w-52"></span>
                    {/* مشاريعنا */}
                  </div>

                  <motion.div style={{ x }} className="flex px-16 ">
                    <div className=" h-screen w-screen flex items-center justify-center " />
                    {[1, 2].map((it, i) => (
                      <div
                        className={` px-8 h-screen w-screen bg-slate-900 flex items-center justify-center bg-gradient-to-r `}
                        key={i}
                      >
                        <div
                          dir="rtl"
                          className="flex justify-between gap-16  min-w-[100%]  "
                        >
                          <div className="flex flex-col">
                            <p className="text-secondary text-6xl font-semibold">
                              {language[`projectTitle${it}`]}
                            </p>
                            <p className="text-white text-2xl w-[40ch] mt-8">
                              {language[`projectDescription${it}`]}
                            </p>
                          </div>
                          <ImageSlide
                            slideY={true}
                            image={imgArr[it - 1]}
                            className="rounded-2xl w-full h-[350px] object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* <Link
          href={"/maintenance"}
          className="rounded-full w-fit bg-white  text-lg text-primary-foreground px-8 py-4 hover:bg-primary-foreground hover:text-white hover:opacity-100 border border-primary-foreground block leading-[5px] mx-auto mt-12 "
        >
          {language.button}
        </Link> */}
      </div>
    </div>
  );
}

export default OurProjects;
