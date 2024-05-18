import { inriaSerif } from "../../layout";
import { arabicContent } from "../../lib/locale/ar";
import homeimage1 from "@/src/public/home1/house-in-faiha-studio-toggle_1.jpg";
import homeimage2 from "@/src/public/home2/baie-de-valois-nautical-center-adhoc-architectes-plus-prisme-architecture_3.jpg";

import homeimage3 from "@/src/public/home3/15354524683989.jpg";
import PropertyCard from "./PropertyCard";

import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import AnimatedText from "./ScrollAway";
function OurProperties() {
  const { OurPropertiesSection: language } = arabicContent;
  return (
    <>
      <div className="relative">
        <AnimatedText
          Y={40}
          className={`text-6xl text-primary  mx-auto block text-center my-12 ${inriaSerif.className}`}
          text={language.title}
        />
        <span className="absolute top-20 right-1/2 translate-x-1/2 bg-secondary block min-h-1 min-w-52"></span>
      </div>
      <div className="flex gap-4 mt-8">
        <PropertyCard image={homeimage1} />
        <PropertyCard image={homeimage2} />
        <PropertyCard image={homeimage3} />

        {/* <PropertyCard image={homeimage1} /> */}
      </div>

      <Button className="rounded-full text-lg mb-10 text-white px-8 py-4 hover:bg-white hover:text-primary hover:opacity-100 border border-primary block leading-[5px] mx-auto ">
        {language.button}
      </Button>
    </>
  );
}

export default OurProperties;
