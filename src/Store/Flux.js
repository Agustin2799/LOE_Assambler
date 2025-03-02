/*
defineStore es una funcion que recibe como parametro un objeto (el cual contendrá 3 funciones) y retorna los objetos store y actions. 
*/

const defineStore = ({ getActions, getStore, setStore }) => {
    return {
        store: {
            counter: 1
        },
        actions: {
            increaseCounter: () => {
                const store = getStore()
                setStore({counter: store.counter + 1})
            }
            
        }
    }
}

export default defineStore;