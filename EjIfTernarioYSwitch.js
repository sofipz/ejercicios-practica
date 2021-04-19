// Ejercicio 1
function parImpar(numero){
    return numero%2==0 ? 'El número es PAR' : 'El número es IMPAR' 
}
console.log(parImpar(6));
console.log(parImpar(9));

// Ejercicio 2
function esNavidad(fecha){
    return fecha == 25-12 || fecha == 12-25 ? '¡Es Navidad!' : 'Ups, todavía no es Navidad :('
}
console.log(esNavidad(25-12));
console.log(esNavidad(12-25));
console.log(esNavidad(02-18));

// Ejercicio 3
function diasXMes(mes){
    switch (mes){
        case 'Enero':
            console.log(mes + ' tiene 31 días')
            break
        case 'Marzo':
            console.log(mes + ' tiene 31 días')
            break
        case 'Mayo':
            console.log(mes + ' tiene 31 días')
            break
        case 'Julio':
            console.log(mes + ' tiene 31 días')
            break
        case 'Agosto':
            console.log(mes + ' tiene 31 días')
            break
        case 'Octubre':
            console.log(mes + ' tiene 31 días')
            break
        case 'Diciembre':
            console.log(mes + ' tiene 31 días')
            break
        case 'Abril':
            console.log(mes + ' tiene 30 días')
            break
        case 'Junio':
            console.log(mes + ' tiene 30 días')
            break
        case 'Septiembre':
            console.log(mes + ' tiene 30 días')
            break
        case 'Noviembre':
            console.log(mes + ' tiene 30 días')
            break
        case 'Febrero':
            console.log(mes + ' tiene 28 días, y cada 4 años tiene 29 días')
            break
        default:
            console.log('Escriba el nombre de un mes existente')
            break
    }
}
diasXMes('Febrero');
diasXMes('Enero');
diasXMes('Abril');
diasXMes('Junio')
diasXMes('Octiembre');
diasXMes('Mayo');

// Ejercicio 4
function recursa (nota){
    if(nota>=6 && nota<=10){
        console.log('Felicitaciones, aprobaste')
    }else if(nota<=4 && nota>=0){
        console.log('Lo siento mucho, deberás recursar la materia')
    }else if(nota >=5 && nota <=6){
        console.log('Desaprobaste, pero tenés la opción de rendir un recuperatorio.')
    }else{
        console.log('Inserte bien la nota que obtuvo; el valor debe estar entre 0 y 10.')
    }
}

recursa(1);
recursa(5);
recursa(8);
recursa(11);
recursa(4);

