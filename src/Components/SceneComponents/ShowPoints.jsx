import React, { useEffect, useRef, useContext } from "react";
import {
  BufferGeometry,
  Float32BufferAttribute,
  Points,
  PointsMaterial,
} from "three";
import { Context } from "../../Store/AppContext";

const ShowPoints = ({ geometryRef, color = "white" }) => {
  const pointsRef = useRef();
  const {store, actions} = useContext(Context)

    useEffect(() => {
      
    if (geometryRef?.current) {
      // Obtén los vértices (coordenadas) del plano a partir de la geometría
      /** La propiedad 'attributes'
       *  contiene los atributos de la geometría,
       * y 'position' es el atributo que define las posiciones de cada vértice.
       * 'array' es el arreglo que contiene las coordenadas X, Y y Z de los vértices.
       */

      const positions = geometryRef.current.attributes.position.array;

      // Crea una nueva geometría para los puntos.
      /** BufferGeometry
       * es una clase que almacena los datos de geometría de manera eficiente.
       * Se usa comúnmente para representar mallas y otros objetos 3D, como puntos o líneas.
       */
      const pointsGeometry = new BufferGeometry();

      // Usa los mismos vértices del plano para los puntos.
      /** Float32BufferAttribute
       *  toma el arreglo de posiciones de los vértices y lo convierte en un
       * atributo que se puede usar en la geometría. El número 3 indica que cada vértice tiene 3 componentes (x, y, z).
       */
      pointsGeometry.setAttribute(
        "position", // Atributo 'position' que definirá las posiciones de los puntos.
        new Float32BufferAttribute(positions, 3) // Se asignan las coordenadas de los vértices del plano.
      );

      // Crea el material de los puntos.
      /** PointsMaterial
       *  es un material especial usado para representar puntos en Three.js.
       * 'color' define el color de los puntos (se espera que la variable 'color' contenga un valor de color válido).
       * 'size' define el tamaño de los puntos. En este caso, cada punto tendrá un tamaño de 0.8.
       */
      const pointsMaterial = new PointsMaterial({
        color: color ,
        size: 0.8,
      });

      // Crea el objeto de puntos a partir de la geometría y el material.
      /** Points
       * es un objeto de Three.js que se usa para representar un conjunto de puntos en el espacio 3D.
       * Se le pasa la geometría que define las posiciones de los puntos y el material que define su apariencia.
       */
      const points = new Points(pointsGeometry, pointsMaterial);

      // Añade los puntos al grupo de referencia (usualmente un grupo de objetos en la escena 3D).
      /**pointsRef.current
       * es la referencia al grupo en el que se agregan los puntos.
       * Esto permite organizar y manipular los puntos como parte de un grupo en la escena 3D.
       * Si 'pointsRef' está asociado a un objeto <group> en el escenario, los puntos se agregarán a dicho grupo.
       */
      pointsRef.current?.add(points);
    }
  }, [color, geometryRef, store.showVertices]);

  return store.showVertices ? <group ref={pointsRef} /> : null;
};

export default ShowPoints;
