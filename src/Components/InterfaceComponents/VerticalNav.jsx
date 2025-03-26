import React, { useState, useContext, useEffect } from "react";
import DropDownNav from "./DropDownNav";
import CheckBox from "./CheckBox";
import TerritoriosNav from "./TerritoriosNav";
import { Context } from "../../Store/AppContext";

const VerticalNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(true);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    console.log('Store en el VERTICALNAV:', store)
  }, [store.coordenadas])

  return (
    <>
      {/* Boton hamburguesa */}
      <div
        className={`rounded-full backdrop-blur-lg absolute bg-gray-700/70 top-5 left-[330px] p-4 w-6 h-6 flex justify-center items-center ${
          !navIsOpen && "translate-x-[-320px]"
        } transition-all duration-500`}
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        <div
          className={`space-y-1 ${navIsOpen ? "hamburguer" : "text-white"} `}
        >
          <div
            className={`${
              navIsOpen ? `bg-emerald-300` : `bg-white`
            } w-4 h-0.5 transition-all duration-300 z-10`}
          ></div>
          <div
            className={`${
              navIsOpen ? `bg-emerald-300` : `bg-white`
            } w-4 h-0.5 transition-all duration-300 z-10`}
          ></div>
        </div>
      </div>
      <div
        className={`w-[320px] backdrop-blur-lg bg-gray-700/70 fixed top-0 left-0 min-h-screen ${
          !navIsOpen && "translate-x-[-320px]"
        } transition-all duration-500`}
      >
        <DropDownNav name={"Opciones generales"} navIsOpen={true}>
          <div className="flex flex-row">
            {/* Coordenadas seleccionadas */}
            <div className="text-white flex flex-col mr-4">
              <span>
                X Seleccionada:{" "}
                <span className="text-amber-500">
                  {store.coordenadas.selectedCoords.x}
                </span>
              </span>
              <span>
                Y Seleccionada:{" "}
                <span className="text-amber-500">
                  {store.coordenadas.selectedCoords.y}
                </span>
              </span>
            </div>

            {/* Coordenadas en hover */}
            <div className="text-white flex flex-col">
              <span>
                X En hover:{" "}
                <span className="text-amber-500">
                  {store.coordenadas.hoveredCoords.x}
                </span>
              </span>
              <span>
                Y En hover:{" "}
                <span className="text-amber-500">
                  {store.coordenadas.hoveredCoords.y}
                </span>
              </span>
            </div>
          </div>

          <CheckBox
            text={"Vértices del mapa"}
            action={() => actions.uiOptions.changeShowVertices()}
          />
          <CheckBox
            text={"Agregar punto"}
            action={() => actions.uiOptions.changeShowCursorPunto()}
          />
        </DropDownNav>
        <DropDownNav
          name={"Territorios"}
          navIsOpen={store.uiOptions.showTerritoriosNav}
          action={() => actions.uiOptions.changeShowTerritoriosNav()}
        >
          <TerritoriosNav navIsOpen={store.uiOptions.showTerritoriosNav} />
        </DropDownNav>
      </div>
    </>
  );
};

export default VerticalNav;
