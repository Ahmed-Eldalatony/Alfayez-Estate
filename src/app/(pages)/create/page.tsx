"use client";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { useState } from "react";
function CreateProperty() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [guest, setGuest] = useState("");
  const [room, setRoom] = useState("");
  const [image, setImage] = useState<File>();
  const [counter, setCounter] = useState(0);
  const handlePropertyForm = () => {
    console.log(
      title,
      description,
      address,
      category,
      price,
      guest,
      room,
      image
    );
    // images upload with supabase and the limitations
  };
  //   https://www.aqarat.com.kw/

  return (
    <>
      <div>
        Create a property
        <form action="">
          <Label htmlFor="title">Title</Label>
          <Input
            className="w-full md:max-w-[500px]"
            type="text"
            placeholder="Property title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label htmlFor="description">Description</Label>
          <Input
            className="w-full md:max-w-[500px]"
            type="text"
            placeholder="Property description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Label htmlFor="address">Address</Label>
          <Input
            className="w-full md:max-w-[500px]"
            type="text"
            placeholder="Property address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />

          <Label htmlFor="gallery">Gallery</Label>
          <Input
            className="w-full md:max-w-[500px]"
            type="file"
            name="gallery"
            accept="image/*"
            placeholder="Property images"
            onChange={(e) => setImage(e.target.files?.[0])}
          />
          <Input
            className="w-full md:max-w-[500px]"
            type="text"
            placeholder="category"
            onChange={(e) => setCategory(e.target.value)}
          />

          <div className="">
            <p>Rooms count</p>
            <span
              className="text-2xl font-semibold p-5 cursor-pointer"
              onClick={() => setCounter((prev) => prev + 1)}
            >
              +
            </span>
            <span className="text-2xl p-0 font-semibold">{counter}</span>
            <span
              className="text-2xl font-semibold p-5 cursor-pointer"
              onClick={() => setCounter((prev) => (prev < 1 ? 0 : prev - 1))}
            >
              -
            </span>
          </div>

          <Input
            className="w-full md:max-w-[500px]"
            type="number"
            placeholder="Rent price"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </form>
        <Button onClick={() => handlePropertyForm()}>Create</Button>
      </div>
    </>
  );
}

export default CreateProperty;
