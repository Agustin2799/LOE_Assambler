import React from "react";
import { Canvas } from "@react-three/fiber";
import { MapControls } from "@react-three/drei";
import Mapa from "./Mapa";

const CanvasWrapper = () => {
  return (
    <>
      <Canvas style={{ background: "#212529" }} className="-z-10"
      camera={{position:[0, 0, 130], fov: 50}}>
        {/* Ambiente */}
        <ambientLight intensity={1} />
        <directionalLight position={[100, 100, 100]} intensity={10} />

        {/* Objetos */}
        <Mapa />

        {/* Controles de la cámara */}
        <MapControls makeDefault screenSpacePanning={true} />

        {/* Escena */}
        <axesHelper args={[100]} />
      </Canvas>
    </>
  );
};

export default CanvasWrapper;
