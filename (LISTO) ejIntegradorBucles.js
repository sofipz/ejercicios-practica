let puntajeParticipante1 = [23, 82, 46];
let puntajeParticipante2 = [12, 67, 7];

let totalParticipante1 = 0
let totalParticipante2 = 0

function encontrarGanador(array1, array2){
    for (let i = 0; i <= 2; i++){
        if(array1[i] > array2[i]){
            totalParticipante1 ++
        }else if(array1[i] < array2[i]){
            totalParticipante2 ++
        }
    }
    return 'Los puntajes obtenidos del participante 1 y 2 respectivamente son: ' + totalParticipante1 + ' y ' + totalParticipante2;
}

function ganador (total1, total2){
    if(total1 > total2){
        return 'Es campeón el participante 1 con ' + total1 + ' vueltas ganadas!'
    }else if(total1 < total2){
        return '¡Es campeón el participante 2 con ' + total2 + ' vueltas ganadas!'
    }else{
        return 'Ambos participantes ganaron la misma cantidad de rondas, por lo tanto, ¡Tenemos un empate!'
    }

}

console.log(encontrarGanador(puntajeParticipante1, puntajeParticipante2));
console.log(ganador(totalParticipante1, totalParticipante2));
