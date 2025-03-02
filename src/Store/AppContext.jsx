//Primero importamos react y los hooks useState y useEffect.
import React, { useState, useEffect } from "react"

//Importamos la función defineStore desde el archivo Flux.js
import defineStore from "./Flux"

//Creamos y exportamos un contexto con valor inicial null, este contexto es el que nos permitirá compartir el estado global en toda la aplicación.
export const Context = React.createContext(null);

//La función injectContext se utiliza para inyectar el contexto en cualquier parte de la app que se necesite.
//En este caso, especificamente en Layout.js
//ContextualizedComponent representa el componente que será envuelto y tendrá acceso al estado global.
const injectContext = (ContextualizedComponent) => {
    //StoreWrapper es un HOC, ya que defuelve un componente alterado o moficado, en este caso ContextualizedComponent, proporcionandole el contexto global.
    //Se encarga de gestionar el estado y proporcionar el estado a todos los componentes que injextContext reciba como parametro.
    const StoreWrapper = props => {
        //Usamos useState para definir el estado inicial.
        //Lo inicializamos con el con el objeto con dos objetos dentro (store y actions) que devuelve defineStore
        //A la cual le pasamos el objecto con 3 referencias a 3 funciones, las cuales requiere en sus parametros.
        const [state, setState] = useState(
            defineStore({
                //getStore devuelve la parte del estado correspondiente al store.
                getStore: () => state.store,
                //getActions devuelve la parte del estado correspondiente a los actions.
                getActions: () => state.actions,
                //setStore ejecuta una función anónima que recibe un objeto (updatedStore, que representa la parte del store modificada). Fusiona el store actual con el anterior, utilizando setState, cerrando así la recursividad ya que, este código, se encuentra dentro de la misma definicion del estado.
                setStore: (updatedStore) => setState({
                    //Actualizamos el store del estado, fucionando el store anterior, con la parte del store actualizada.
                    // ======> Línea a probar, recomendada por IA  store: { ...state.store, ...updatedStore }, // Crea un nuevo objeto en lugar de modificar el existente
                    //Mas sobre el uso de Object en apuntes -> Clase Object.
                    store: Object.assign(state.store, updatedStore),
                    //Las actions permanecen inalteradas.
                    //state.actions ya es un objeto, cuando usamos ...state.actions dentro de {} estamos creando una copia de este objeto, en un objeto nuevo. (el spreed operator sólo puede usarse dentro de {} o []).
                    actions: { ...state.actions }
                })

            })

        )
        //Este use effect se ejecutará cuando se monte este componente, debido al segundo parámetro [], similar a componentDidMount en un componente de clase
        useEffect(() => {
            //Aquí dentro es donde se obtendrán todos los datos y recursos necesarios para iniciar la aplicación
            //Para esto se usan las actions del store.
            //Ej state.actions.accionDefinidaEnElEstado();

        }, [])

        //Retornamos el ContextualizedComponent, envuelto por el proveedor del contexto, el cual tiene como valor el estado global (state) que definimos anteriormente en este HOC, es decir, le inyectamos el estado global.
        //Ahora cualquier componente que reciba injextContext, tendrá acceso al estado global. debido a que es envuelto con este.
        return (
            <Context.Provider value={state}>
                {/* Más sobre el el uso del { ...props } en apuntes -> Uso del spreed con {}*/}
                <ContextualizedComponent {...props} />
            </Context.Provider>
        )
    }
    //Retornamos el StoreWraped que envuelve al componente con el contexto (estado global)
    return StoreWrapper
};
//Exportamos por default la funcion que recibe el componente al cual se se aplicará el contexto, la cual implementa un HOC para tratar el componente que tiene como parametro, evolviendolo con el contexto y para gestionar el store global.
//Podrá ser usada en cualquier parte de la aplicación, donde no haya llegado el contexto.
export default injectContext;
