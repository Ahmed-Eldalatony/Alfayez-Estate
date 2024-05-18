import Link from "next/link";
import { inriaSerif } from "./layout";
import { EnglishContent } from "./lib/locale/en";
import { arabicContent } from "./lib/locale/ar";
export default function Header() {
  const { Header: language } = arabicContent;
  return (
    <>
      <div
        className="mx-auto flex justify-between py-6 items-center sticky top-2 bg-white z-50  border-2 border-secondary px-8 rounded-full mt-4 animate-expand
       "
      >
        <Link
          href={"/"}
          className={
            " w-max font-bold  min-w-[11ch] text-3xl  text-primary " +
            inriaSerif.className
          }
        >
          {language.logo}
        </Link>
        <nav className="w-full delay-300 animate-fade-in-0 ">
          <ul className="flex justify-between text-primary-foreground font-semibold ">
            <div className="flex gap-8 mx-auto ">
              <li>
                <Link href="/housing">{language.housing} </Link>
              </li>
              <li>
                <Link href={"/our-services"}>{language.services}</Link>
              </li>
            </div>
            <div className="flex gap-8">
              <li>
                <Link href={"/signup"}>{language.signup}</Link>
              </li>
              <li>
                <Link href={"/login"}>{language.login}</Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}
