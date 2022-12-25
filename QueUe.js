let fila = [1,2,3,4,5,6,7,8,9,10];

function queue(fila, nuevoNum) {
    fila.push(nuevoNum);
    despachado = fila.shift();
    return despachado;
}

numeroSaliente = queue(fila, 11);
console.log(numeroSaliente);
console.log(   "Numeros en fila en este momento: ", fila);
