import { Suspense, use } from "react";
import prisma from "./lib/db";

export default async function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className=""></div>
      </div>
    </>
  );
}
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
