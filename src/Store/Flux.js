/*
defineStore es una funcion que recibe como parametro un objeto (el cual contendrá 3 funciones) y retorna los objetos store y actions. 
*/


const defineStore = ({ getActions, getStore, setStore }) => {
    return {
        store: {
            selectedCoords: { x: 0, y: 0 },
            hoveredCoords: { x: 0, y: 0 },
            showVertices: false,
            agregarPunto: false,
            counter: 1
        },
        actions: {
            increaseCounter: () => {
                const store = getStore()
                setStore({ counter: store.counter + 1 })
            },
            changeShowVertices: () => {
                const store = getStore()
                setStore({ showVertices: !store.showVertices })
                console.log('showVertices cambió', store.showVertices)
            },
            changeHoveredCoords: (coordsObject) => {
                const store = getStore()
                //acortamos los numeros a dos digitos despues de la coma (devuelve un str) y lo convertimos a numero nuevamente.
                setStore({ hoveredCoords: { x: parseFloat(coordsObject.x.toFixed(2)), y: parseFloat(coordsObject.y.toFixed(2)) } })
                console.log('hoveredCoords cambió', store.hoveredCoords)
            },
            changeAgregarPunto: () => {
                	const store = getStore()
                setStore({ agregarPunto: !store.agregarPunto })
                console.log('dibujaPunto cambió', store.agregarPunto)

            },
            setSelectedCoords: (coordsObject) => {
                const store = getStore()
                //acortamos los numeros a dos digitos despues de la coma (devuelve un str) y lo convertimos a numero nuevamente.
                setStore({ selectedCoords: { x: parseFloat(coordsObject.x.toFixed(2)), y: parseFloat(coordsObject.y.toFixed(2)) } })
                console.log('selectedCoords cambió', store.selectedCoords)

            }

        }
    }
}

export default defineStore;