import React from "react";
import { Shape } from "three";

const DibujaTerritorio = ({ coordenadas, color = "orange", opacity = 0.5 }) => {
  if (!coordenadas || coordenadas.length < 3) {
    console.error(
      "Se necesitan al menos 3 coordenadas para formar una figura."
    );
    return null; // Evita renderizar si no hay suficientes coordenadas
  }

  // Crear la forma geométrica utilizando las coordenadas proporcionadas
  const shape = new Shape();
  const [primera, ...resto] = coordenadas;

  shape.moveTo(primera[0], primera[1]); // Punto inicial
  resto.forEach(([x, y]) => shape.lineTo(x, y)); // Conectar el resto de los puntos
  shape.lineTo(primera[0], primera[1]); // Cerrar el polígono

  return (
    <mesh>
      <shapeGeometry args={[shape]} />
      <meshBasicMaterial color={color} opacity={opacity} transparent={true} />
    </mesh>
  );
};

export default DibujaTerritorio;
