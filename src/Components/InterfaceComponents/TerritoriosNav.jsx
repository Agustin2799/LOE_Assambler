import React, { useState, useEffect, useContext } from "react";
import CheckBox from "./CheckBox";
import { Context } from "../../Store/AppContext";


const TerritoriosNav = ({ navIsOpen }) => {
    const [tipoTerritorio, setTipoTerritorio] = useState("terrestre");
    const { store, actions } =  useContext(Context)

  useEffect(() => {
      console.log(tipoTerritorio);
  }, [tipoTerritorio]);
    
    useEffect(() => {
        console.log('Estado del navIsOpen en el TerritoriosNav: ', navIsOpen)
    },[navIsOpen])

  return (
    <div>
      <p className="text-white ">Tipo de territorio</p>
      <div
        onClick={() => {
          setTipoTerritorio("terrestre");
        }}
        className={`py-0.5 px-1.5 flex flex-row w-max justify-between items-center cursor-pointer ${
          tipoTerritorio === "terrestre" ? "text-white" : "text-gray-400"
        }`}
      >
        <div className="w-min me-2">
          <div
            className={`rounded-full w-4 h-4 border ${
              tipoTerritorio === "terrestre"
                ? " border-amber-600 bg-amber-400"
                : "border-cyan-950 bg-blue-950"
            }`}
          ></div>
        </div>
        <div className="w-max">Terrestre</div>
      </div>
      <div
        onClick={() => {
          setTipoTerritorio("acuatico");
        }}
        className={`py-0.5 px-1.5 flex flex-row w-max justify-between items-center cursor-pointer ${
          tipoTerritorio === "acuatico" ? "text-white" : "text-gray-400"
        }`}
      >
        <div className="w-min me-2">
          <div
            className={`rounded-full w-4 h-4 border ${
              tipoTerritorio === "acuatico"
                ? " border-amber-600 bg-amber-400"
                : "border-cyan-950 bg-blue-950"
            }`}
          ></div>
        </div>
        <div className="w-max">Acuático</div>
      </div>
      <div
        onClick={() => {
          setTipoTerritorio("costero");
        }}
        className={`py-0.5 px-1.5 flex flex-row w-max justify-between items-center cursor-pointer ${
          tipoTerritorio === "costero" ? "text-white" : "text-gray-400"
        }`}
      >
        <div className="w-min me-2">
          <div
            className={`rounded-full w-4 h-4 border ${
              tipoTerritorio === "costero"
                ? " border-amber-600 bg-amber-400"
                : "border-cyan-950 bg-blue-950"
            }`}
          ></div>
        </div>
        <div className="w-max">Costero</div>
      </div>
    </div>
  );
};

export default TerritoriosNav;
