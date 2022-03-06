import React from "react";
import { IGoogleResponse } from "../utils/interfaces";
import { Footer } from "./Footer";
import { Pagination } from "./Pagination";
interface Props {
  results: IGoogleResponse;
}

export const SearchResults: React.FC<Props> = ({ results }) => {
  return (
    <>
      <main
        className={`${
          results.items
            ? "min-h-[60vh] grid gap-y-5 p-5 sm:grid-cols-12"
            : "h-[60vh] flex items-center"
        }`}
      >
        {results.items ? (
          <>
            <p className="text-gray-600 text-md sm:col-start-3 sm:col-span-full">
              About {results.searchInformation?.formattedTotalResults} results (
              {results.searchInformation.formattedSearchTime} seconds)
            </p>
            {results.items.map((result) => (
              <div key={result.link} className="sm:col-start-3 sm:col-span-5">
                <div className="group">
                  <a className="text-green-800 block" href={result.link}>
                    {result.displayLink}
                  </a>
                  <a
                    href={result.link}
                    className="text-blue-700 font-medium text-xl py-1 block group-hover:underline"
                  >
                    {result.title}
                  </a>
                </div>
                <p className="text-md text-gray-900">{result.snippet}</p>
              </div>
            ))}
            <Pagination className="sm:col-start-3 sm:col-span-4" />
          </>
        ) : (
          <h1 className="w-full text-gray-600 text-xl text-center">
            No data available! :c
          </h1>
        )}
      </main>
      <Footer />
    </>
  );
};
