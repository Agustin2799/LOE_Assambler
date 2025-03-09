import React, { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const DropDownNav = ({ name, children }) => {
  const [dropIsOpen, setDropIsOpen] = useState(false);
  return (
    <div className="w-full h-min flex flex-col">
      <div
        className={`w-full h-auto p-1 cursor-pointer hover:bg-slate-950 flex justify-between transition-all duration-200 ${
          dropIsOpen ? "bg-gray-700/80" : "bg-slate-800/30"
        }`}
        onClick={() => setDropIsOpen(!dropIsOpen)}
      >
        <div
          className={`w-max ps-2 ${
            dropIsOpen ? "text-white" : "text-gray-400"
          } transition-all duration-200`}
        >
          {name}
        </div>
        <div className="w-min flex justify-center items-center">
          <ChevronLeftIcon
            className={`w-5 h-5 ${
              dropIsOpen ? "-rotate-90 text-emerald-300" : "text-white"
            } transition-all duration-800`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden max-h-0 ${
          dropIsOpen && "max-h-[500px]"
        } transition-all duration-800 ease-in-out bg-gray-500/30`}
      >
        <div className="p-2">
        {children}
        </div>
      </div>
    </div>
  );
};

export default DropDownNav;
