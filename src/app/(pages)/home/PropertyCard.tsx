import { inriaSerif } from "../../layout";
import { arabicContent } from "../../lib/locale/ar";
import Image from "next/image";

function PropertyCard({ image }: { image: string }) {
  const { OurPropertiesSection: language } = arabicContent;
  return (
    <>
      <div className="flex flex-col gap-0 hover:shadow-2xl hover:scale-105 hover:shadow-secondary p-4 rounded-3xl transition-all duration-300 mb-20">
        <Image
          className="rounded-3xl bg-cover w-full  aspect-square object-cover"
          src={image}
          alt="home"
          width={400}
          height={400}
        />
        <p className={`text-2xl font-semibold text-primary `}>
          {language.propertyTitle}
        </p>
        <p className="text-gray-600 text-base">{language.propertyAddress}</p>
        <div className="text-base flex gap-2">
          <span>10{language.propertyRooms}</span>
          <span>3{language.popertyBedrooms}</span>
          <span>2{language.propertyBathrooms}</span>
        </div>
        <span className="text-primary text-2xl font-bold underline-offset-2 underline underline-red-400">
          1000$
        </span>
      </div>
    </>
  );
}

export default PropertyCard;
