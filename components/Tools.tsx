import React from "react";
import { HeaderOption } from "./HeaderOption";
import { SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import {
  LocationMarkerIcon,
  PhotographIcon,
  NewspaperIcon,
  DotsVerticalIcon,
  PlayIcon,
} from "@heroicons/react/outline";

interface Props {
  className: string;
  searchTxt: string | string[];
}

export const Tools: React.FC<Props> = ({ className, searchTxt }) => {
  const options = [
    { Icon: SearchIcon, title: "All" },
    { Icon: PhotographIcon, title: "Images" },
    { Icon: PlayIcon, title: "Videos" },
    { Icon: NewspaperIcon, title: "News" },
    { Icon: LocationMarkerIcon, title: "Maps" },
    { Icon: DotsVerticalIcon, title: "More" },
  ];
  const router = useRouter();

  return (
    <section className={`${className}`}>
      {options.map((option, idx) => {
        if (!router.query.option) {
          if (idx === 0)
            return (
              <div
                key={idx}
                onClick={() =>
                  router.push(
                    `/search?term=${searchTxt}&option=${option.title}`
                  )
                }
              >
                <HeaderOption
                  Icon={option.Icon}
                  title={option.title}
                  selected={true}
                />
              </div>
            );
        }

        if (router.query.option === option.title) {
          return (
            <div
              key={idx}
              onClick={() =>
                router.push(`/search?term=${searchTxt}&option=${option.title}`)
              }
            >
              <HeaderOption
                Icon={option.Icon}
                title={option.title}
                selected={true}
              />
            </div>
          );
        }
        return (
          <div
            key={idx}
            onClick={() =>
              router.push(`/search?term=${searchTxt}&option=${option.title}`)
            }
          >
            <HeaderOption
              Icon={option.Icon}
              title={option.title}
              selected={false}
            />
          </div>
        );
      })}
    </section>
  );
};
