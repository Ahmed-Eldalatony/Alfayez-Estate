// @ts-nocheck
import HeroSection from "./(pages)/home/HeroSection";
import OurProperties from "./(pages)/home/OurProperties";
import AnimatedText from "./ScrollAway";
import OurServices from "./(pages)/home/OurServices";
import OurProjects from "./(pages)/home/OurProjects";
import WhyUs from "./(pages)/home/WhyUs";
function page() {
  return (
    <>
      <HeroSection />
      <OurProperties />
      <OurServices />
      <OurProjects />
      <WhyUs />
      {/* <PortfolioPage /> */}
    </>
  );
}
export default page;

function SkeletonLoading() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      {/* <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard /> */}
    </div>
  );
}
