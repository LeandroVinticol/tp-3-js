/*6. Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)*/

function perimetroRectangulo(base, altura) {
  return 2 * (base + altura);
}

let base = Number(prompt("Ingresa la base del rectángulo:"));
let altura = Number(prompt("Ingresa la altura del rectángulo:"));

if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
  console.log(
    "Por favor, ingrese valores válidos para la base y la altura del rectángulo."
  );
} else {
  let perimetro = perimetroRectangulo(base, altura);
  console.log("El perímetro del rectángulo es: " + perimetro);
}
