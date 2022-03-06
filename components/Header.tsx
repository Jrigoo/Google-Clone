import React from "react";
import Image from "next/image";

import { useRouter } from "next/router";
import {
  SearchIcon,
  MicrophoneIcon,
  XIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import { CogIcon } from "@heroicons/react/outline";
import { Avatar } from "./Avatar";
import { Tools } from "./Tools";

export const Header = () => {
  const [searchTxt, setSearchTxt] = React.useState("");
  const [X, setX] = React.useState(false);
  const router = useRouter();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTxt(e.target.value);
    setX(true);
    if (!e.target.value) setX(false);
  }
  function handleX() {
    setX(false);
    setSearchTxt("");
  }
  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    router.push(`/search?term=${searchTxt}&option=${router.query.option}`);
  };

  return (
    <header className="sticky top-0 bg-white grid grid-cols-2 gap-y-4 p-5 grid-flow-row-dense sm:grid-cols-12 sm:gap-x-2 lg:p-8 border">
      {/* Google Image */}
      <div className="flex items-center justify-self-start sm:col-span-2">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google image"
          width={120}
          height={40}
          className="object-contain cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Avatar */}
      <div className="flex text-gray-700 justify-self-end sm:col-start-11 sm:col-span-3">
        <CogIcon className="h-10 w-10 px-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        <ViewGridIcon className="h-10 w-10 px-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        <Avatar />
      </div>

      {/* SearchBox */}
      <form className="col-span-2 sm:col-start-3 sm:col-span-7 sm:justify-start lg:col-span-6">
        <div className="flex items-center px-5 py-2 hover:shadow-sm focus-within:shadow-sm rounded-full border-gray-200 border">
          <input
            type="text"
            className="w-1/3 focus:outline-none flex-grow"
            name="term"
            value={searchTxt}
            onChange={handleInput}
          />

          {X && (
            <XIcon
              className="w-5 mx-2 text-gray-700 cursor-pointer transition delay-100 hover:scale-125"
              onClick={handleX}
            />
          )}

          <div className="border-l border-gray-200 flex items-center">
            <MicrophoneIcon className="w-5 mx-2 text-gray-700 cursor-pointer" />
            <button type="submit" onClick={handleSubmit}>
              <SearchIcon className="w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </form>

      {/* Tools */}
      <Tools
        className="flex flex-wrap justify-around text-gray-700 font-medium col-span-2 sm:col-start-3 sm:col-span-8 sm:justify-start"
        searchTxt={searchTxt}
      />
    </header>
  );
};
