// estoy en una competencia de clavados,
// en dos arrays se muestran los 5 clavados que hacen los competidores 
//en una competencia gana el que tiene el mejor promedio de clavado
// en otra gana el competidor con el mejor clavado

let clavadosParticipanteA = [5,8,4,9,5]
let clavadosParticipanteB = [8,7,8,6,8]

let puntajePorPromedio = (puntajes) => {
    let suma = 0
    for(let i=0; i<puntajes.length; i++){
        suma = suma + puntajes[i]
    }
    return suma/puntajes.length
};

let puntajePorMayor = puntajes => {
    let mayor = puntajes[0]
    for (let i = 0; i < puntajes.length; i++) {
        if (puntajes[i]>mayor){
            mayor = puntajes[i]
        }else{
            mayor = mayor;
        }  
    }
    return mayor
}

function competencia(resultadosA,resultadosB,calcularPuntaje){
    //calcular puntaje del a
    let puntajeA = calcularPuntaje(resultadosA)
    //calcular puntaje del b
    let puntajeB = calcularPuntaje(resultadosB)
    //ver cual puntaje es mayor y mostrar resultado
    return puntajeA > puntajeB ? 'Ganó el participante A' : 'Ganó el participante B'
}

console.log(competencia(clavadosParticipanteA, clavadosParticipanteB, puntajePorPromedio));
console.log(competencia(clavadosParticipanteA, clavadosParticipanteB, puntajePorMayor));