document.getElementById("boton").addEventListener("click", () => {
  console.log("¡Hola a todos!");
});

const parrafo = document.getElementById("parrafo");
const div = document.querySelector(".caja");
const lista = document.getElementById("lista");
const cabecera = document.getElementById("cabecera");
const dato = document.querySelector(".dato");
const tabla = document.getElementById("tabla");

console.log("Párrafo:", parrafo.textContent);
console.log("Div:", div.textContent);
console.log("Lista:", lista.innerHTML);
console.log("Cabecera:", cabecera.textContent);
console.log("Celda TD:", dato.textContent);
console.log("Tabla:", tabla);