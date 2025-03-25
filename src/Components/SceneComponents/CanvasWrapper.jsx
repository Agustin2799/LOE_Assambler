import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { MapControls } from "@react-three/drei";
import Mapa from "./Mapa";
import RayCaster from "./RayCaster";

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
        
        
      </Canvas>
    </>
  );
};

export default CanvasWrapper;
