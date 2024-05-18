import AnimatedText from "./ScrollAway";
import { arabicContent } from "../../lib/locale/ar";
import { inriaSerif } from "../../layout";
import { CircleUserRound, Drill } from "lucide-react";
import Link from "next/link";
import { Home } from "lucide-react";
function WhyUs() {
  const { WhyUsSection: language } = arabicContent;
  return (
    <>
      <div className="cover3 relative min-h-[600px] mt-[100vh]">
        <span className="absolute h-full w-full opacity-85 bg-primary-foreground block "></span>
        <div className="relative mt-[-100vh]">
          <AnimatedText
            Y={40}
            className={`text-6xl text-white mx-auto block text-center my-12 ${inriaSerif.className}`}
            text={language.title}
          />
          <span className="absolute top-20 right-1/2 translate-x-1/2 bg-secondary block min-h-1 min-w-52"></span>
        </div>
        <div className="relative z-100">
          <p
            className={
              "text-secondary mx-auto text-center mt-8 text-7xl w-[30ch] z-40 relative " +
              inriaSerif.className
            }
          >
            {language.header}
          </p>
          <div className="flex gap-24 mt-16 w-[600px] justify-center  mx-auto">
            <div className="flex flex-col justify-center items-center gap-2">
              <CircleUserRound color="orange" size={80} />
              <p className="text-secondary text-5xl">1000+ </p>
              <p className="text-white text-center text-4xl">
                {language.customer}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Drill color="orange" size={80} />
              <p className="text-secondary text-center text-5xl">1000+ </p>
              <p className="text-white text-4xl">{language.woker}</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Home color="orange" size={80} />
              <p className="text-secondary text-5xl">1000+ </p>
              <p className="text-white text-center text-4xl">{language.unit}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative ">
          <AnimatedText
            Y={40}
            className={`text-6xl text-primary mx-auto block text-center my-12 ${inriaSerif.className}`}
            text={language.join}
          />
          <span className="absolute top-20 right-1/2 translate-x-1/2 bg-secondary block min-h-1 min-w-52"></span>
        </div>
        <Link
          className=" mb-11 bg-primary transition-all text-white hover:bg-white hover:text-primary text-xl border-primary py-2 px-6 block mx-auto rounded-full w-fit "
          href="/login"
        >
          {language.signin}
        </Link>
      </div>
    </>
  );
}

export default WhyUs;
