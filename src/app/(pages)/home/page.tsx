// @ts-nocheck
import HeroImage1 from "@/src/public/herosection.webp";

import Image from "next/image";
import { arabicContent } from "../../lib/locale/ar";
import { Inria_Serif } from "next/font/google";
import { Button } from "@/src/components/ui/button";
import { inriaSerif } from "../../layout";
import HeroSection from "./HeroSection";
import OurProperties from "./OurProperties";
import AnimatedText from "./ScrollAway";
import OurServices from "./OurServices";
import OurProjects from "./OurProjects";
import PortfolioPage from "./TestAnimation";
function page() {
  return (
    <>
      <HeroSection />
      <OurProperties />
      <OurServices />
      <OurProjects />
      {/* <PortfolioPage /> */}
    </>
  );
}
export default page;
