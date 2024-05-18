"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = () => {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.data.id) {
          router.push("/");
          console.log(user);
        }
      });
  };

  return (
    <div>
      <form
        className="mx-auto flex flex-col gap-4  w-full max-w-[400px] "
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-semibold text-gray-900">Log In</h1>

        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />

        <Button onClick={() => handleForm()} type="submit">
          Log in
        </Button>
        <p className="text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            className="underline text-blue-500 hover:text-primary"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default LogIn;
