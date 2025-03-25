import React from "react";

const AgregarPunto = ({ coords = [0, 0], mostrarPunto }) => {
  return mostrarPunto ? (
    <group>
      <mesh position={[coords[0], coords[1], 0.1]}>
        <circleGeometry args={[0.6, 16]} />
        <meshBasicMaterial color={"white"} />
      </mesh>
    </group>
  ) : null;
};

export default AgregarPunto;
