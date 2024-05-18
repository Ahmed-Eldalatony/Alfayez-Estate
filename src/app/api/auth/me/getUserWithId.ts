"use server";
import { NextRequest } from "next/server";

export const getUserWithId = async (request: NextRequest) => {
  try {
    // const token =
    //   request.cookies.get("userId")?.value ||
    //   "fa522fa5-de91-4de9-a070-5b41123070db";
    // console.log("token", token);
    // const decodedToken: any = jwt.verify(token, process.env.SECRET_TOKEN!);
    // return decodedToken.id;
    // return token;
  } catch (error: any) {
    console.log("get user id error", error);
    throw new Error(error.message);
  }
};
