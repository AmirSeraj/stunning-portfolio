import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link
          href="mailto:amir.seraj6990@gmail.com"
          className="absolute m-auto left-0 right-0 text-center w-[80px] h-[80px] text-white rounded-full bg-dark flex justify-center items-center font-semibold hover:bg-light hover:text-dark border border-dark"
        >
          Hire Me!
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
