import { inriaSerif } from "../../layout";
import { arabicContent } from "../../lib/locale/ar";
import worker from "@/src/public/worker.jpg";
import { Button } from "@/src/components/ui/button";
import handshake from "@/src/public/handshake.avif";
import Link from "next/link";
import happyWorker from "@/src/public/happyworker.webp";

import { ImageSlide } from "../home/ScrollAway";
import PropertyCard from "../home/PropertyCard";
import { AnimatedTextHorizontal } from "../home/ScrollAway";
import Image from "next/image";
import AnimatedText from "../home/ScrollAway";
function OurServices() {
  const { OurservicesSection: language } = arabicContent;
  return (
    <>
      <div className="bg-primary-foreground h-[100vh]white rounded-3xl px-6">
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
      </div>
      <div className="relative mt-5">
        <div className="opacity-80 absolute bg-primary-foreground w-full h-full rounded-2xl"></div>
        <ImageSlide
          slideX={false}
          slideY={true}
          image={happyWorker}
          className="rounded-2xl w-full h-[650px] object-cover"
        />
        <div className=" absolute top-24 right-28 z-30 w-full text-white">
          <p className={" text-8xl " + inriaSerif.className}>
            {language.header}
          </p>
          <p className={"mt-10 z-30  w-fit  text-white text-5xl bg-secondary "}>
            {language.header2}
          </p>
          <Link
            href={"/book"}
            className="rounded-full w-fit bg-white  text-primary-foreground px-8 py-4 hover:bg-primary-foreground hover:text-white hover:opacity-100 border border-primary-foreground block leading-[5px] mt-10 text-xl "
          >
            {language.button2}
          </Link>
        </div>
      </div>
    </>
  );
}

export default OurServices;
