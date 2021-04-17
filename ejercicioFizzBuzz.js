let numerosUnoalCien = (numero1, numero2,mensaje, mensaje2, mensaje3) => {
    for (let i=1; i <= 100; i++){
        if ( i % numero1 == 0 && i % numero2 == 0){
            console.log (mensaje);
        }
        else if (i % numero1 == 0){
            console.log (mensaje2);
        }
        else if(i % numero2 == 0){
            console.log (mensaje3)
        }
        else{
            console.log (i)
        }
    }
}

numerosUnoalCien(4,5,"Multiplo de los dos", "Multiplo del primero", "multiplo del segundo");
