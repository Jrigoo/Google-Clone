import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

interface Props {
  className: string;
}

export const Pagination: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;

  return (
    <div className={`w-full flex justify-between px-2 ${className}`}>
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${
            startIndex - 10
          }&option=${router.query.option}`}
          passHref
        >
          <div className="flex items-center">
            <ChevronLeftIcon className="h-5 hover:underline text-blue-700 cursor-pointer" />
            <p className="hover:underline text-blue-700 cursor-pointer">
              Previous
            </p>
          </div>
        </Link>
      )}

      <Link
        href={`/search?term=${router.query.term}&start=${
          startIndex + 10
        }&option=${router.query.option}`}
        passHref
      >
        <div className="flex items-center">
          <p className="hover:underline text-blue-700 cursor-pointer">Next</p>
          <ChevronRightIcon className="h-5 hover:underline text-blue-700 cursor-pointer" />
        </div>
      </Link>
    </div>
  );
};
