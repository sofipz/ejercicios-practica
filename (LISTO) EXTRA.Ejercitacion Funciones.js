// 2)
function urlConverter(string){
    let nombreurl = "www." + string + ".com"
    return nombreurl
}
console.log(urlConverter('Mel'));

// 3)
function admiracion (string){
    let fraseCompleta = '¡' + urlConverter(string) + '!'
    return fraseCompleta
}

console.log(admiracion('Sofi'));

// 4)
function dogAgeCalculator (edad){
    let dogAge = edad * 7
    return dogAge
}
console.log(dogAgeCalculator(5));

// 5)
let calculoValorXHora = function (sueldo, horasTrabajadas){
    let precioXHora = sueldo / horasTrabajadas;
    return precioXHora
}
console.log(calculoValorXHora(30000, 140));

// 7)
function mayuscula (string){
    return string === string.toUpperCase()
}
console.log(mayuscula("hola"));
console.log(mayuscula("HOLA"));

// 8)
function tipoDeParametro (parametro){
    return typeof parametro
}
console.log(tipoDeParametro(2));
console.log(tipoDeParametro(true));
console.log(tipoDeParametro('tuVieja'));

// Ejercicio fechaYHora
function fechaYHora(){
    return 'La fecha y hora del día de hoy son: ' + Date();
}
console.log(fechaYHora());