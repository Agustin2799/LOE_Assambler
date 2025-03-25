import React, { useEffect, useRef, forwardRef, useContext } from "react";
import { useLoader, useThree } from "@react-three/fiber"; // React Three Fiber
import { TextureLoader } from "three"; // Específicamente para cargar texturas
import mapImage from "/PrototipoConFiltro.jpg"; // Imagen para el mapa
import ShowPoints from "./ShowPoints"; // Componente personalizado para puntos
import AgregarPunto from "./agregarPunto";
import { Context } from "../../Store/AppContext";

/* Sobre useImperativeHandler y forwardRef.

useImperativeHandler es un hook de React que se usa junto con forwardRef, para controlar qué valores expone un componente a través de su ref.

Normalmente cuando pasas una ref a un componente, React solo te da acceso al nodo DOM o a la instancia del componente. Pero con useImperativeHandle, puedes personalizar lo que se devuelve cuando se accede a esa ref.

Por esta razón, esto no tiene sentido;

useImperativeHandle(ref, () => ({
  getGroup: () => planeRef.current,
}));

Solo con utilizar forwardRef, ya exponemos la referencia.
*/
const Mapa = forwardRef((props, ref) => {
  const { store, actions } = useContext(Context)
  const mapRef = useRef();
  const meshRef = useRef(); 


  /* Sobre el useLoader.
  
  Es un hook de drei que facilita la carga de recursos como texturas, modelos 3D y archivos JSON al manejar automáticamente el ciclo de vida de la carga, la caché y la asincronización con React. Evita renderizados innecesarios al cargarlos una vez y reutilizarlos en cada render.
  
  Nota: Si usamos <Suspense> podemos mostrar un loader mientras se carga el recurso.

  Sin useLoader, tendríamos que manejar manualmente la carga con el useEffect y gestionar el estado de carga.
  */
  const texture = useLoader(TextureLoader, mapImage);

 

  return (
    <group ref={mapRef}>
      <mesh position={[0, 0, 0]} name="Mapa">
        <planeGeometry args={[160, 120, 16, 12]} ref={meshRef} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <AgregarPunto coords={[store.coordenadas.hoveredCoords.x, store.coordenadas.hoveredCoords.y]} mostrarPunto={store.uiOptions.showCursorPunto} />
      <ShowPoints geometryRef={meshRef} color="red" />
    </group>
  );
});

export default Mapa;
