/*2. Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let ciudades = [];

while (true) {
  let ciudad = prompt("Ingrese el nombre de una ciudad:");
  if (ciudad === null || ciudad === "") {
    break;
  }
  ciudades.push(ciudad);
}

document.write("<h1>Arreglo de Ciudades</h1>");
for (let i = 0; i < ciudades.length; i++) {
  document.write(ciudades[i] + "</br>");
}

document.write("<br>Longitud del arreglo:" + ciudades.length + "</br>");

document.write("Primera ciudad: " + ciudades[0] + "</br>");
document.write("Tercera ciudad: " + ciudades[2] + "</br>");
document.write("Última ciudad: " + ciudades[ciudades.length - 1] + "</br>");

ciudades.push("París");

document.write("Elemento en la segunda posición:" + ciudades[1] + "</br>");

ciudades[1] = "Barcelona";

document.write("<br><h2>Arreglo de ciudades actualizado</br> </h2>");
for (let i = 0; i < ciudades.length; i++) {
  document.write(ciudades[i] + "</br>");
}
