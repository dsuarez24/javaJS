// personaje de television

let nombre = 'Diego';
let anime = 'pecados capitales';
let edad = 16;


let personaje = {
    nombre: 'Fernando',
    apellido:'Suarez',
    edad: 16,
}

console.log(personaje );
console.log(personaje.nombre);
console.log(personaje['apellido']);

personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.apellido; //se elimina una propiedad
console.log(personaje)

