import React, { useEffect, useRef, useContext, useState } from "react";
import { Raycaster, Vector2 } from "three";
import { useThree } from "@react-three/fiber";
import { Context } from "../../Store/AppContext";

const RayCaster = ({ canvasRef }) => {
  const { store, actions } = useContext(Context);
  const raycaster = useRef(new Raycaster());
  const mouse = useRef(new Vector2());
  const { camera, scene } = useThree();
  const isDragging = useRef(false); // Indicador para detectar arrastre

  // Función auxiliar para manejar el Raycaster
  const handleRaycaster = (event, callback) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // Normalizar las coordenadas del mouse
    mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Configurar el Raycaster
    raycaster.current.setFromCamera(mouse.current, camera);

    // Detectar intersecciones
    const intersects = raycaster.current.intersectObjects(scene.children);

    if (intersects.length > 0) {
      const intersectedPoint = intersects[0].point;
    
      callback(intersectedPoint); // Ejecutar el callback con las coordenadas
    } else {
      callback(null); // Restablecer si no hay intersección
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    const handleMouseDown = () => {
      isDragging.current = false; // Inicializamos el indicador
    };

    const handleMouseMove = () => {
      isDragging.current = true; // El usuario está arrastrando
    };

    const handleMouseUp = (event) => {
      // Ejecuta la acción solo si no se estaba arrastrando
      if (!isDragging.current) {
        handleRaycaster(event, actions.coordenadas.setSelectedCoords);
      }
    };

    const handleMouseMoveHover = (event) => {
      handleRaycaster(event, actions.coordenadas.changeHoveredCoords);
    };

    if (canvas) {
      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("mousemove", handleMouseMoveHover); // Hover
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseup", handleMouseUp);
        canvas.removeEventListener("mousemove", handleMouseMoveHover);
      }
    };
  }, [camera, scene, canvasRef, store.coordenadas]);

  return null; // No es necesario renderizar nada, es solo lógica
}

export default RayCaster;
