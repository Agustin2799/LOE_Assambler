import React, { useRef, useContext, useEffect, useState } from "react";
import { Context } from "../../Store/AppContext";

const AgregarPunto = () => {
  const { store } = useContext(Context);
  const [render, setRender] = useState(store.agregarPunto);
  const x = store.hoveredCoords?.x || 0; // Valor por defecto en caso de null
  const y = store.hoveredCoords?.y || 0;

  useEffect(() => {
    if (store.agregarPunto) {
      console.log("punto agregado");
    }
    setRender(store.agregarPunto);
  }, [store, store.agregarPunto]);

  return render ? (
    <group>
      <mesh position={[x, y, 0.1]}>
        <circleGeometry args={[0.6, 16]} />
        <meshBasicMaterial color={"white"} />
      </mesh>
    </group>
  ) : null;
};

export default AgregarPunto;
