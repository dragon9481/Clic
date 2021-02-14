// Programa De Clicar
// Variables
let contador = 0
const cero = true
var inicio = Date.now();
let horaB

console.log(inicio);

// Funciones
function countingClicks() {
        contador = contador+1
        document.getElementById("counting").innerHTML = contador;
}
//

function joc() {
    contador = 0
    document.getElementById("counting").innerHTML = contador;
}

