import type { NextPage } from "next";
import React from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

import { Avatar } from "../components/Avatar";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  const router = useRouter();

  const search: React.FormEventHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(form.entries());
    router.push(`/search?term=${formData.term}&option=All`);
  };

  return (
    <main className="h-screen flex flex-col">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/GoogleIcon.png" />
      </Head>

      {/* <Header/> */}
      <header className="w-full p-5 flex justify-between text-sm text-gray-700 font-medium">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex items-center">
          <p className="link px-2">Email</p>
          <p className="link px-2">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 px-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar />
        </div>
      </header>

      {/* <Body/> */}
      <form
        className="mt-10 flex flex-col items-center flex-grow"
        onSubmit={search}
      >
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google image"
          width={300}
          height={80}
          className="object-contain"
        />

        <div className="w-md sm:w-1/2 flex items-center mt-5 px-5 py-3 hover:shadow-sm focus-within:shadow-sm rounded-full border-gray-200 border">
          <SearchIcon className="w-5 text-gray-700" />
          <input
            type="text"
            className="focus:outline-none mx-3 flex-grow"
            name="term"
          />
          <MicrophoneIcon className="w-5 text-gray-700" />
        </div>

        {/* Buttons */}
        <div className="w-5/6 sm:1/2 mt-8 flex justify-center">
          <button className="btn mx-1">Google Search</button>
          <button className="btn mx-1">I&apos;m Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </main>
  );
};

export default Home;
