import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import {
  LocationMarkerIcon,
  PhotographIcon,
  NewspaperIcon,
  DotsVerticalIcon,
  PlayIcon,
} from "@heroicons/react/outline";

interface Props {
  className: string;
}

export const Tools: React.FC<Props> = ({ className }) => {
  return (
    <section className={` ${className}`}>
      <button className="toolBtn group">
        <SearchIcon className="toolBtnIcon" />
        All
      </button>
      <button className="toolBtn group">
        <PhotographIcon className="toolBtnIcon" />
        Images
      </button>
      <button className="toolBtn group">
        <PlayIcon className="toolBtnIcon" />
        Videos
      </button>
      <button className="toolBtn group">
        <NewspaperIcon className="toolBtnIcon" />
        News
      </button>
      <button className="toolBtn group">
        <LocationMarkerIcon className="toolBtnIcon" />
        Maps
      </button>
      <button className="toolBtn group">
        <DotsVerticalIcon className="toolBtnIcon" />
        More
      </button>
    </section>
  );
};
