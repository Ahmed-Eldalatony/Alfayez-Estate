import { inriaSerif } from "../../layout";
import { arabicContent } from "../../lib/locale/ar";
import worker from "@/src/public/worker.jpg";
import { Button } from "@/src/components/ui/button";
import handshake from "@/src/public/handshake.avif";
import Link from "next/link";

import { ImageSlide } from "./ScrollAway";
import PropertyCard from "./PropertyCard";

import { AnimatedTextHorizontal } from "./ScrollAway";
import Image from "next/image";
import AnimatedText from "./ScrollAway";
function OurServices() {
  const { OurservicesSection: language } = arabicContent;
  return (
    <div className="bg-primary-foreground h-[100vh]white rounded-3xl px-6 py-10">
      <div className="relative">
        <AnimatedText
          Y={40}
          className={`text-6xl text-white   mx-auto block text-center my-12 ${inriaSerif.className}`}
          text={language.title}
        />
        <span className="absolute top-20 right-1/2 translate-x-1/2 bg-secondary block min-h-1 min-w-52"></span>
      </div>
      <div className="flex justify-between gap-16 mt-10">
        <AnimatedTextHorizontal
          text={language.description1}
          className="text-white text-5xl w-[30ch]"
        />
        {/* <Image
          className="rounded-2xl w-[600px] h-[350px] object-cover"
          src={worker}
          alt="worker"
          width={400}
          height={400}
        /> */}
        <ImageSlide
          slideX={true}
          image={worker}
          className="rounded-2xl w-[600px] h-[350px] object-cover"
        />
      </div>
      <div className="flex justify-between gap-16 mt-10">
        <ImageSlide
          slideX={true}
          image={handshake}
          className="rounded-2xl w-[600px] h-[350px] object-cover"
        />
        <AnimatedTextHorizontal
          text={language.description2}
          className="text-white text-5xl w-[30ch]"
        />
      </div>
      <Link
        href={"/maintenance"}
        className="rounded-full w-fit bg-white  text-lg text-primary-foreground px-8 py-4 hover:bg-primary-foreground hover:text-white hover:opacity-100 border border-primary-foreground block leading-[5px] mx-auto mt-12 "
      >
        {language.button}
      </Link>
    </div>
  );
}

export default OurServices;
