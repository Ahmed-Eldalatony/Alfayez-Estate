// TODO: rewrite this
import { PrismaClient } from "@prisma/client";
import { supabase } from "@/src/app/lib/supabase";
import { NextResponse } from "next/server";
import { error } from "console";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    firstName,
    lastName,
    category,
    email,
    password,
    nationality,
    phoneNumber,
    cardIdNumber,
  } = body;
  const prisma = new PrismaClient();
  if (
    !firstName ||
    !lastName ||
    !cardIdNumber ||
    !phoneNumber ||
    !category ||
    !nationality ||
    !email ||
    !password
  ) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  if (firstName.length < 3 || lastName.length < 3) {
    return NextResponse.json(
      { error: "Name must be at least 3 characters" },
      { status: 400 }
    );
  }
  try {
    const data = await supabase.auth.signUp({ email, password });

    if (data.error) {
      console.log(data.error);
      return NextResponse.json({ error: data.error }, { status: 400 });
    }
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        category,
        cardIdNumber,
        phoneNumber,
        nationality,
      },
    });

    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}
