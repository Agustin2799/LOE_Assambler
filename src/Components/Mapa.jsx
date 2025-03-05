import React, { useEffect, useRef, forwardRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import mapImage from "/PrototipoConFiltro.jpg"
import ShowPoints from './ShowPoints'


/*Sobre useImperativeHandler y fowardRef.

useImperativeHandler es un hook de React que se usa junto con fowardRef, para controlar qué valores expone un componente a través de su ref.

Normalmente cuando pasas una ref a un componente, React solo te da acceso al nodo DOM o al ainstancia del componente. Pero con useImperativeHandle, puedes personalizar lo que se devuelve cuando se accede a esa ref.

por esta razon, esto no tiene sentido; 

useImperativeHandle(ref, () => ({
  getGroup: () => planeRef.current,
}));

Solo con utilizar fowardRef, ya exponemos la referencia.

*/
const Mapa = forwardRef((props, ref) => {
    const mapRef = useRef();
    const geometryRef = useRef()
  
    /*Sobre el useLoader.
    
    Es un hook de drei que facilita la carga de recursos como textureas, modelos 3D Y archivos JSON al manejar automáticamente el ciclo de vide de la carga, la caché y l asincronización con react. Evita renderizados innecesarios al cargarlos una vez y reutilizarlos en cada render
    
    Nota: Si usamos <Suspense > podemos mostrar un loader mientras se carga el recurso.

    Sin useLoader, tendríamos que manejar manualmente la carga con el useEffect y gestionar el estado de carga.
    */
    const texture = useLoader(TextureLoader, mapImage);

    useEffect(() => {
      console.log('Componente Mapa renderizado', mapRef.current.position)  
    },[])
    
    
  return (
    <group ref={mapRef}>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[160, 120, 16, 12]} ref={geometryRef} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <ShowPoints geometryRef={geometryRef} color="red" />
    </group>
  );
})

export default Mapa