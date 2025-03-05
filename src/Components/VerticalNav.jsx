import React, { useState } from "react";
import DropDownNav from "./DropDownNav";

const VerticalNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(true);
  return (
    <>
      {/* Boton hamburguesa */}
      <div
        className={`rounded-full backdrop-blur-lg absolute bg-gray-700/70 top-5 left-[510px] p-5 w-12 h-12 flex justify-center items-center ${
          !navIsOpen && "translate-x-[-500px]"
        } transition-all duration-500`}
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        <div className={`space-y-2 ${navIsOpen && "hamburguer"} `}>
          <div className="bg-white w-6 h-0.5 transition-all duration-300"></div>
          <div className="bg-white w-6 h-0.5 transition-all duration-300"></div>
        </div>
      </div>
      <div
        className={`w-[500px] backdrop-blur-lg bg-gray-700/70 fixed top-0 left-0 min-h-screen ${
          !navIsOpen && "translate-x-[-500px]"
        } transition-all duration-500`}
      >
        <DropDownNav name={"opciones de ejemplo"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
          deleniti molestias. Repellendus illum a sint! Fugit velit voluptates
          alias, suscipit fuga hic tempora facilis dolor perferendis cumque
          dicta accusantium et.
        </DropDownNav>
        <DropDownNav name={"opciones de ejemplo"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
          deleniti molestias. Repellendus illum a sint! Fugit velit voluptates
          alias, suscipit fuga hic tempora facilis dolor perferendis cumque
          dicta accusantium et.
        </DropDownNav>
        <DropDownNav name={"opciones de ejemplo"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
          deleniti molestias. Repellendus illum a sint! Fugit velit voluptates
          alias, suscipit fuga hic tempora facilis dolor perferendis cumque
          dicta accusantium et.
        </DropDownNav>
      </div>
    </>
  );
};

export default VerticalNav;
