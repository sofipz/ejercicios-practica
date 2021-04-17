let suma = function (a, b){
    return a + b;
}
let resta = function funcionResta(a, b){
    return a - b;
}
let division = function funcionDivision(a, b){
    return a / b;
}
let multiplicacion = function funcionMultiplicacion(a, b){
    return a* b;
}

let nombreJugador = 'Hernan'
let golesJugador = 0;
let precioEnDolares = 0;

function hacerGol(){
    golesJugador ++;
    precioEnDolares = precioEnDolares + 10000
    return 'GOOOL!!!'
}

hacerGol('Hernan');
console.log(golesJugador + ' goles y ahora el jugador ' + nombreJugador + ' tiene un valor de ' + precioEnDolares + ' dolareeess!!!');


function hattrick (){
    hacerGol();
    hacerGol();
    hacerGol();
    precioEnDolares = precioEnDolares + (precioEnDolares *10)/100;
}

hattrick();
console.log(golesJugador + ' goles y ahora el jugador ' + nombreJugador + ' tiene un valor de ' + precioEnDolares + ' dolareeess!!!');

hacerGol();
console.log(golesJugador + ' goles y ahora el jugador ' + nombreJugador + ' tiene un valor de ' + precioEnDolares + ' dolareeess!!!');

