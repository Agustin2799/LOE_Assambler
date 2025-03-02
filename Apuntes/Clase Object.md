## Profundización en Object en JavaScript
En JavaScript, Object es una clase global incorporada que sirve como el prototipo base de todos los objetos. Es decir, cualquier objeto creado en JavaScript hereda de Object y tiene acceso a sus métodos y propiedades.

### 📌 1. ¿Cómo funciona Object?
Cuando creas un objeto en JavaScript, este se basa en la clase Object. Hay varias formas de crear objetos:

🔹 `Creación de un objeto de forma literal`
```javascript
const persona = {
    nombre: "Juan",
    edad: 30
};
console.log(persona.nombre); // "Juan"
```

Aquí, persona es un objeto que hereda de Object.

🔹 `Creación de un objeto con new Object()`
```javascript
const persona = new Object();
persona.nombre = "Juan";
persona.edad = 30;

console.log(persona.nombre); // "Juan"
```

✅ Es equivalente a la forma literal, pero menos común.

### 📌 2. Métodos útiles de Object
Object tiene varios métodos incorporados que permiten manipular objetos de manera eficiente.

**Método	        Descripción** 
`Object.keys(obj)`	Devuelve un array con las claves del objeto.
`Object.values(obj)`	Devuelve un array con los valores del objeto.
`Object.entries(obj)`	Devuelve un array con pares [clave, valor].
`Object.assign(destino, fuente)`	Copia propiedades de un objeto a otro.
`Object.freeze(obj)`	Bloquea modificaciones en el objeto.
`Object.seal(obj)`	Impide agregar o eliminar propiedades, pero permite modificar valores existentes.
`Object.hasOwn(obj, prop)`	Verifica si un objeto tiene una propiedad propia (sin herencia).
`Object.getPrototypeOf(obj)`	Devuelve el prototipo de un objeto.

Ejemplo con Object.keys(), Object.values() y Object.entries()
```javascript
const persona = { nombre: "Juan", edad: 30 };

console.log(Object.keys(persona));   // ["nombre", "edad"]
console.log(Object.values(persona)); // ["Juan", 30]
console.log(Object.entries(persona)); // [["nombre", "Juan"], ["edad", 30]]
```

### 📌 3. Object y el Prototipo Base
Todos los objetos en JavaScript heredan de Object.prototype, lo que significa que tienen acceso a métodos como toString(), hasOwnProperty(), etc.

Ejemplo de herencia desde Object.prototype
```javascript
const persona = { nombre: "Juan" };

console.log(persona.toString()); // "[object Object]"
console.log(persona.hasOwnProperty("nombre")); // true
```
🔹 toString() es un método heredado de Object.prototype.
🔹 hasOwnProperty() verifica si una propiedad pertenece directamente al objeto, sin considerar la herencia.

### 📌 4. Object.assign() vs. Spread Operator (...)
Object.assign() fusiona objetos, pero muta el objeto destino. significa que el objeto original es modificado directamente en lugar de crear una copia nueva.

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const resultado = Object.assign(obj1, obj2);

console.log(resultado); // { a: 1, b: 2 }
console.log(obj1); // ⚠️ { a: 1, b: 2 } -> obj1 fue modificado
```
En React, es mejor usar el spread operator (...) para evitar mutaciones:

```javascript
const nuevoObj = { ...obj1, ...obj2 };
console.log(nuevoObj); // ✅ { a: 1, b: 2 }
console.log(obj1); // ✅ { a: 1 } -> No se modificó
```

### 📌 5. Diferencia entre Object.create() y new Object()
🔹 Object.create(proto) permite crear un objeto con un prototipo específico.
🔹 new Object() crea un objeto vacío con Object.prototype como prototipo.

```javascript
const proto = { saludo: "Hola" };
const obj = Object.create(proto);

console.log(obj.saludo); // "Hola"
console.log(Object.getPrototypeOf(obj)); // { saludo: "Hola" }
```

Aquí, obj tiene a proto como su prototipo.

### Conclusión
📌 Object es la base de todos los objetos en JavaScript y proporciona métodos útiles para manipularlos.
📌 Métodos como Object.assign(), Object.keys(), Object.values(), etc., facilitan el trabajo con objetos.
📌 Object.create() permite establecer un prototipo específico, mientras que new Object() crea un objeto vacío.
📌 En React, es mejor usar el spread operator (...) en lugar de Object.assign() para evitar mutaciones de estado.