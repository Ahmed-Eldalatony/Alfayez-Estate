"use client";
import React from "react";
import { useState, useContext } from "react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardIdNumber, setCardIdNumber] = useState("");
  const [nationality, setNationality] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleForm = () => {
    try {
      setLoading(true);
      fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          cardIdNumber,
          nationality,
          password,
          category,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          res?.error && setError(res?.error);
          setData(res);
          if (res?.data.id) {
            router.push("/login");
            console.log(data);
          }
        });
    } catch (err: any) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        className="mt-20 mx-auto  w-full md:max-w-[500px] max-w-[400px] "
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-semibold mb-4 text-gray-900">
          Create an account{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <Input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First name"
          />
          <Input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last name"
          />

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
          <Select onValueChange={(value) => setCategory(value)}>
            <SelectTrigger className="w-full py-6">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="CLIENT">Client</SelectItem>
                <SelectItem value="WORKER">Worker</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            onChange={(e) => setNationality(e.target.value)}
            type="text"
            placeholder="your Nationality/Community"
          />
          <Input
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            placeholder="Your phone number"
          />
          <Input
            onChange={(e) => setCardIdNumber(e.target.value)}
            type="text"
            placeholder="Your card id number"
          />
          {error && !loading && (
            <span className="text-red-500 col-span-2">{error}</span>
          )}
          <Button onClick={() => handleForm()} type="submit">
            Sign Up
          </Button>
        </div>
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="underline text-blue-500 hover:text-primary"
          >
            Log In
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
