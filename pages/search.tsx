import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Tools } from "../components/Tools";

interface Props {}

const Search: NextPage = () => {
  return (
    <>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Search Results */}
    </>
  );
};

export default Search;
