import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { MapControls } from "@react-three/drei";
import Mapa from "./Mapa";
import RayCaster from "./RayCaster";
import AgregarPunto from "./agregarPunto";
import DibujaTerritorio from "./DibujaTerritorio";

const CanvasWrapper = () => {
  const canvasRef = useRef();

  return (
    <>
      <Canvas
        ref={canvasRef}
        style={{ background: "#212529" }}
        className="-z-10"
        camera={{ position: [0, 0, 250], fov: 50 }}
      >
        {/* Ambiente */}
        <ambientLight intensity={1} />
        <directionalLight position={[100, 100, 100]} intensity={10} />

        {/* Objetos */}
        <Mapa />

        {/* Controles de la cámara */}
        <MapControls makeDefault screenSpacePanning={true} />

        {/* Escena */}
        <RayCaster canvasRef={canvasRef} />
        <AgregarPunto />

        {/* Territorios más grandes y detallados */}
        <DibujaTerritorio
          coordenadas={[
            [0, 0],
            [30, 5],
            [50, 20],
            [40, 40],
            [20, 50],
            [0, 45],
            [-20, 40],
            [-30, 20],
            [-15, 10],
            [-5, 5],
          ]}
          color="blue"
        />

        <DibujaTerritorio
          coordenadas={[
            [30, 5],
            [60, 10],
            [80, 30],
            [75, 50],
            [50, 55],
            [40, 40],
            [50, 20],
          ]}
          color="green"
        />

        <DibujaTerritorio
          coordenadas={[
            [-30, 20],
            [-50, 10],
            [-60, 30],
            [-55, 50],
            [-40, 60],
            [-20, 50],
            [0, 45],
          ]}
          color="red"
        />

        <DibujaTerritorio
          coordenadas={[
            [40, 40],
            [50, 55],
            [45, 70],
            [30, 80],
            [10, 85],
            [0, 70],
            [20, 50],
          ]}
          color="purple"
        />

        <DibujaTerritorio
          coordenadas={[
            [-20, 50],
            [-40, 60],
            [-45, 75],
            [-30, 85],
            [-10, 80],
            [0, 70],
          ]}
          color="orange"
        />
      </Canvas>
    </>
  );
};

export default CanvasWrapper;
