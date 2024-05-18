import { PrismaClient } from "@prisma/client";
import { supabase } from "@/app/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  const prisma = new PrismaClient();
  try {
    if (!email || !password) {
      console.log("all fields are required");
      return NextResponse.json(
        { error: "all fields are required" },
        { status: 400 }
      );
    }
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return NextResponse.json(
        { error: "email or password is not correct" },
        {
          status: 401,
        }
      );
    }
    // if(user.id) responjkj
    // return NextResponse.json({ data: user }, { status: 200 });
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      status: 200,
      data: user,
    });
    response.cookies.set("userId", user.id, {
      httpOnly: false,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
