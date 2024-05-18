import Image from "next/image";
import HeroImage1 from "@/src/public/herosection.webp";
// import HeroImage2 from "@/src/public/airbnb-desktop.png";
import HeroImage2 from "@/src/public/5336226-1336957324.jpg.webp";
// import HeroImage4 from "@/src/public/airbnb-mobile.webp";
import { arabicContent } from "../../lib/locale/ar";
import { Inria_Serif } from "next/font/google";
import { Button } from "@/src/components/ui/button";
import { inriaSerif } from "../../layout";
import AnimatedText from "./ScrollAway";
import { ImageCarousel } from "./ScrollAway";
import HeroImage3 from "@/src/public/kuwaitnight.png"

function HeroSection() {
  const imageUrls = [HeroImage1, HeroImage2, HeroImage3];

  const { HeroSection: language } = arabicContent;
  return (
    <div className=" relative h-[670px]">
      <div className="w-full h-full z-10  bg-black aspect-[16/9] opacity-40 absolute rounded-3xl"></div>

      <ImageCarousel images={imageUrls} />

      <div
        className={
          " text-white z-20 absolute top-1/2 translate-x-[50%] -translate-y-1/2 right-1/2  "
        }
      >
        <AnimatedText
          Y={80}
          text={language.title}
          className={
            "text-white   w-[17ch] text-8xl font-bold " + inriaSerif.className
          }
        />
        {/* {language.title} */}
        <AnimatedText
          Y={80}
          text={language.description}
          className="w-[62ch] text-center mx-auto mt-10 text-base"
        />

        <div className="flex gap-4 mt-10 justify-center">
          <Button className="bg-white text-primary rounded-full hover:bg-white hover:opacity-80">
            {language.contact}
          </Button>
          <Button className="text-white  rounded-full">{language.login}</Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
