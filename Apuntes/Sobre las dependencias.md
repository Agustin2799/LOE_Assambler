Utilidad de `three`, `@react-three/fiber` y `@react-three/drei`

## 1️⃣ Three.js (`three`)  
Es la **biblioteca base** para trabajar con gráficos 3D en JavaScript. Permite crear y manipular escenas 3D utilizando WebGL.  

### 🔹 Funcionalidades principales:  
✅ Creación de geometrías y materiales.  
✅ Manejo de luces y sombras.  
✅ Control de cámaras y perspectivas.  
✅ Simulación de física y animaciones.  
✅ Carga de texturas y modelos 3D.  

Three.js es una API de bajo nivel, por lo que manejar escenas directamente con él puede ser complejo y requerir mucho código.  

---

## 2️⃣ `@react-three/fiber`  
Es un **wrapper de React** para Three.js que permite manejar escenas 3D como componentes de React, facilitando la programación declarativa en lugar de trabajar con la API imperativa de Three.js.  

### 🔹 Beneficios:  
✅ Permite usar el estado y los efectos de React (`useState`, `useEffect`, `useRef`).  
✅ Maneja automáticamente el renderizado y la reconciliación de la escena.  
✅ Hace que sea más fácil integrar Three.js con otros componentes de React.  

`Canvas` es el componente base de `@react-three/fiber`, que se encarga de iniciar la escena, la cámara y el renderizado. 

Ejemplo de un cubo:
```jsx
import { Canvas } from "@react-three/fiber";

function Escena() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </Canvas>
  );
}
```

---

## 3️⃣ `@react-three/drei`  
Es una **colección de utilidades y componentes preconstruidos** para `@react-three/fiber`, lo que simplifica tareas comunes en Three.js.  

### 🔹 Algunos ejemplos útiles:  
✅ **OrbitControls** – Permite mover la cámara con el mouse.  
✅ **useTexture** – Facilita la carga de texturas.  
✅ **Text** – Agrega texto 3D fácilmente.  
✅ **useGLTF** – Carga modelos 3D en formato GLTF o GLB sin complicaciones.  

`@react-three/drei` permite reducir la cantidad de código necesario para lograr interactividad y efectos visuales avanzados.  

Ejemplo de OrbitControls y un Modelo GLTF: 
```jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Modelo() {
  const { scene } = useGLTF("/modelo.glb");
  return <primitive object={scene} />;
}

function Escena() {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <Modelo />
    </Canvas>
  );
}

```
---

## 🔗 **¿Cómo se relacionan entre sí?**  
1️⃣ `three`: La base para trabajar con gráficos 3D.  
2️⃣ `@react-three/fiber`: Permite usar Three.js con React de forma declarativa.  
3️⃣ `@react-three/drei`: Añade herramientas útiles para no repetir código.  

Juntas, estas librerías facilitan la creación de escenas 3D interactivas en React. 🚀


No es necesario importar mesh porque en @react-three/fiber, los elementos de Three.js como <mesh>, <boxGeometry> y <meshStandardMaterial> se pueden usar directamente como JSX sin necesidad de importarlos manualmente.

🔹 ¿Por qué no se importa mesh?
En Three.js, normalmente harías esto:

js
Copy
Edit
import { Mesh, BoxGeometry, MeshStandardMaterial } from "three";
Pero en @react-three/fiber, estos elementos ya están integrados y pueden escribirse directamente en JSX:

jsx
Copy
Edit
<mesh>
  <boxGeometry />
  <meshStandardMaterial color="red" />
</mesh>
El motor de @react-three/fiber convierte automáticamente estos elementos JSX en instancias de Three.js.

Si quisieras hacerlo de forma imperativa (sin JSX), entonces sí tendrías que importar Mesh y crear el objeto manualmente. Pero en la mayoría de los casos con React, usar JSX es la forma recomendada. 