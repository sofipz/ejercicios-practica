// Iba a usar callback pero no se me ocurrió cómo, así que hice sin callback este ejercicio

let participante1 = [8, 7, 8, 9];
let participante2 = [4, 9, 9, 6];

let puntosAcumuladosP1 = 0
let puntosAcumuladosP2 = 0  


let vueltasGanadas = function(array1, array2){
      
    for(let i = 0; i < array1.length; i++){
        if(array1[i] > array2[i]){
            puntosAcumuladosP1 = puntosAcumuladosP1 + 1
        }else if(array2[i] > array1[i]){
            puntosAcumuladosP2 = puntosAcumuladosP2 + 1
        }
    }
    return 'El puntaje del participante 1 es: ' + puntosAcumuladosP1 + ' y el puntaje del participante 2 es: ' + puntosAcumuladosP2;
}
console.log(vueltasGanadas(participante1, participante2));


// Ejercicio callback del PLAYGROUND
let doble = numero => numero * 2;
let triple = numero => numero * 3;
let aplicarCallback = (numero, callback) => callback(numero);
console.log(aplicarCallback(3, doble));
console.log(aplicarCallback(5, triple));


// Otro ejercicio Callback del PLAYGROUND
function agregarHttp(url) {
    return 'http://' + url
}

let urlCompletos = ['www.github.com', 'www.facebook.com', 'www.instagram.com']
function procesar(array, callback){
     for (let i = 0; i < array.length; i++){
        array[i] = callback(array[i])
    }
    return urlCompletos
 }
 
console.log(procesar(urlCompletos, agregarHttp));

