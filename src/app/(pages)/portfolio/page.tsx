"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import freshfish from "@/src/public/freshfish.avif";
import vegetable from "@/src/public/vegetables.jpg";
import { arabicContent } from "../../lib/locale/ar";

import { ImageSlide } from "../home/ScrollAway";
const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Medium Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { OurProjectsSection: language } = arabicContent;
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div dir="ltr">
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh] relative" ref={ref}>
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
            My Works
          </div>
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex">
              <div className=" h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
              {[1, 2, 3].map((it, i) => (
                <div
                  className={` px-8 h-screen w-screen bg-slate-900 flex items-center justify-center bg-gradient-to-r `}
                  key={i}
                >
                  <div
                    dir="rtl"
                    className="flex justify-between gap-16 mt-20 min-w-[100%]  "
                  >
                    <div className="flex flex-col">
                      <p className="text-secondary text-6xl font-semibold">
                        {language[`projectTitle${2}`]}
                      </p>
                      <p className="text-white text-2xl w-[40ch] mt-8">
                        {language.projectDescription1}
                      </p>
                    </div>
                    <ImageSlide
                      slideY={true}
                      image={vegetable}
                      className="rounded-2xl w-full h-[350px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
          <h1 className="text-8xl">Do you have a project?</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
