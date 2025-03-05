import React, { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const DropDownNav = ({ name, children }) => {
  const [dropIsOpen, setDropIsOpen] = useState(false);
  return (
    <div className="w-full h-min flex flex-col">
      <div
        className={`w-full h-auto p-1 hover:bg-gray-400/50  flex justify-between transition-all duration-200 ${dropIsOpen ? "bg-gray-700/80" : "bg-gray-600/30"}`}
        onClick={() => setDropIsOpen(!dropIsOpen)}
      >
        <div className="w-max ">{name}</div>
        <div className="w-min flex justify-center items-center">
          <ChevronLeftIcon
            className={`w-5 h-5 ${
              dropIsOpen ? "-rotate-90 text-emerald-300": "text-white"
            } transition-all duration-800`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden max-h-0 ${
          dropIsOpen && "max-h-[500px]"
        } transition-all duration-800 ease-in-out bg-gray-500/30`}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDownNav;
