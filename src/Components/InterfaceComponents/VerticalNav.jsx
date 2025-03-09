import React, { useState, useContext } from "react";
import DropDownNav from "./DropDownNav";
import CheckBox from "./CheckBox";
import { Context } from "../../Store/AppContext";

const VerticalNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(true);
  const { store, actions } = useContext(Context);

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
        <DropDownNav name={"Opciones generales"}>
          <div className="flex flex-row">
            {/* Coordenadas seleccionadas */}
            <div className="text-white flex flex-col mr-4">
              <span>
                X Seleccionada:{" "}
                <span className="text-amber-500">{store.selectedCoords.x}</span>
              </span>
              <span>
                Y Seleccionada:{" "}
                <span className="text-amber-500">{store.selectedCoords.y}</span>
              </span>
            </div>

            {/* Coordenadas en hover */}
            <div className="text-white flex flex-col">
              <span>
                X En hover:{" "}
                <span className="text-amber-500">{store.hoveredCoords.x}</span>
              </span>
              <span>
                Y En hover:{" "}
                <span className="text-amber-500">{store.hoveredCoords.y}</span>
              </span>
            </div>
          </div>

          <CheckBox
            text={"Vértices del mapa"}
            action={() => actions.changeShowVertices()}
          />
          <CheckBox
            text={"Agregar punto"}
            action={() => actions.changeAgregarPunto()}
          />
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
