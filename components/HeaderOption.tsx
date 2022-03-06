import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  selected?: Boolean;
}

export const HeaderOption: React.FC<Props> = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center border-b-4 border-transparent pb-2 px-1 cursor-pointer m-1 group ${
        selected && "text-google-blue border-b-google-blue"
      }`}
    >
      <Icon
        className={`w-5 mx-1 transition-transform delay-100 ${
          selected && "text-google-blue scale-110"
        }`}
      />
      <p className="hidden sm:flex">{title}</p>
    </div>
  );
};
