"use server";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getUserWithId } from "./getUserWithId";

export async function GET(request: NextRequest) {
  const token = await getUserWithId(request);
  const prisma = new PrismaClient();
  console.log("token", token);
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: token,
      },
    });
    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error: any) {
    console.log("The error is from ME ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
