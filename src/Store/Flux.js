const defineStore = ({ getActions, getStore, setStore }) => {
    return {
        store: {
            uiOptions: {
                showVertices: false,
                showCursorPunto: false
            },
            coordenadas: {
                selectedCoords: { x: 0, y: 0 },
                hoveredCoords: { x: 0, y: 0 }
            },
            scene: {
                regionEnConstruccion: {
                    gobernador: null,
                    nombre: null,
                    poblacion: {},
                    terreno: null,
                    clima: null,
                    ubicacion: {},
                    vertices: [],
                    ubicacionesEdificios: {},
                    ubicacionesRecursos: {}
                }
            },
            mapData: {
                nombreDelMapa: null,
                jugadores: null,
                regiones: {
                    regionesTerrestres: {},
                    regionesCosteras: {},
                    regionesAcuaticas: {}
                }

            }
        },
        actions: {
            uiOptions: {
                changeShowVertices: () => {
                    console.log('Dentro del changeShowVertices en flux')
                    const store = getStore();
                    setStore({
                        ...store,
                        uiOptions: {
                            ...store.uiOptions,
                            showVertices: !store.uiOptions.showVertices
                        }
                    });
                    console.log('showVertices cambió', getStore().uiOptions.showVertices);
                },
                changeShowCursorPunto: () => {
                    console.log('Dentro del changeAgregarRegion en flux')

                    const store = getStore();
                    setStore({
                        ...store,
                        uiOptions: {
                            ...store.uiOptions,
                            showCursorPunto: !store.uiOptions.showCursorPunto
                        }
                    });
                    console.log('showCursorPunto cambió', store.uiOptions.showCursorPunto);
                }
            },
            coordenadas: {
                changeHoveredCoords: (coordsObject) => {
                    const store = getStore();
                    setStore({
                        ...store,
                        coordenadas: {
                            ...store.coordenadas,
                            hoveredCoords: {
                                x: parseFloat(coordsObject.x.toFixed(2)),
                                y: parseFloat(coordsObject.y.toFixed(2))
                            }
                        }
                    });
                    console.log('hoveredCoords cambió', getStore().coordenadas.hoveredCoords);
                },
                setSelectedCoords: (coordsObject) => {
                    const store = getStore();
                    setStore({
                        ...store,
                        coordenadas: {
                            ...store.coordenadas,
                            selectedCoords: {
                                x: parseFloat(coordsObject.x.toFixed(2)),
                                y: parseFloat(coordsObject.y.toFixed(2))
                            }
                        }
                    });
                    console.log('selectedCoords cambió', getStore().coordenadas.selectedCoords);
                }
            },
            scene: {}
        }
    };
}

export default defineStore;
