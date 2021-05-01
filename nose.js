let autos = [
    {marca: 'Ford',
    modelo: 'Fiesta',
    color: 'Azul',
    anioFabricacion: 2019,
    kmRecorridos: 200,
    precioFinal: 150000,
    cantidadCuotas: 12,
    patente: 'APL123',
    vendido: false},
   {marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Blanco',
    anioFabricacion: 2019,
    kmRecorridos: '0km',
    precioFinal: 100000,
    cantidadCuotas: 14,
    patente: 'JJK116',
    vendido: false}
]




let concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
       for(let i = 0; i < autos.length; i++){
          if(patente == autos[i].patente){
             return autos[i]
          }else{
             return null
          }
       }
    },
   venderAuto: function(patente){
      this.buscarAuto(patente).vendido = true;
   },
   autosParaLaVenta: function(){
    let autosNoVendidos = []
    for( let i = 0; i < autos.length; i++){
        if (autos[i].vendido === false){
            autosNoVendidos.push(autos[i])
        }
    }
    return autosNoVendidos
    },
    autosNuevos: function(callback){
        let autos0k = []
        for(let i = 0; i < .length; i++){
            if(autosNoVendidos[i]<100)
            autos0k.push(autosNoVendidos[i])
        }
        return autos0k
    }
}


 console.log(concesionaria.autosNuevos(autosNoVendidos));

//María, contenta con el trabajo que realizaron, les pide otra funcionalidad
//extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles
//de los autos para la venta son 0 km. Tené en cuenta que María considera que un
//auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que
//desarrollar la funcionalidad autosNuevos.
//¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?

