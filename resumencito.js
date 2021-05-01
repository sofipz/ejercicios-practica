//VARIABLES var let y const
    var tuVieja = 'aca ponemos el valor que queremos asignar a la variable'
    //let solo será accesible en el bloque de codigo en el que fue declarada
    let nuevaVariable = 'lo mismo que en var'
    // const es como let, pero a const no se le puede reasignar el valor
    const terceraVariable = 'blabla'
    // terceraVariable = 'bleble' (esto no se puede en const)



//TIPOS DE DATOS
    35 //numerico
    'hola' //string
    true //booleano
    35 / '2' // esta division me va a dar como resultado NaN (not a number) porque no se puede dividir dato numerico con strings
    null //valor nulo
    let saludo // el dato en esta variable es el valor undefined. Porque no le asignamos ningún valor a la variable.



//OPERADORES
    + //suma
    - //resta
    * //multiplicación
    / //división
    ++ //operador de incremento. Por ej: ++15 va a ser igual a 16. Se escribe primero el operador y luego el número.
    -- //operador de decremento.
    % //modulo. Nos da el resto de una division. Por ej: 7%2 será igual a 1.
    = //operador de asignacion.

    //Los siguientes operadores devuelven siempre como resultado un dato booleano (true o flase)
        == //operador de comparacion simple. Me va a decir si lo que esta a la izquierda es igual a lo que esta a la derecha. No distingue dato numerico de string. 4 sera igual a '4'.
        === //operador de comparacion simple. Me va a decir si lo que esta a la izquierda es exactamente igual a lo que esta a la derecha. Si distingue numerico de string. Es decir, 4 no sera exactamente igual a '4'.
        != //desigualdad simple.
        !== //desigualdad estricta
        < //menor a
        > //mayor a
        <= //menor o igual a
        >= //mayor o igual a.
        && //Es como un 'and'. Para preguntar por dos cosas. Si ambas son verdaderas el resultado sera true. Si al menos una es falsa, el resultado de la oracion entera sera false.
        || //Es como un 'or'. Para preguntar por dos cosas. Con que una sea verdadera, el resultado sera true.
        ! //operador de negacion. Nos permite cambiar el valor a falso o verdadero dependiendo cual era el valor que existia anteriormente.
        '' + '' // concatenacion. Para unir uno o mas strings. Si unimos con un numero, se volvera un string.



//FUNCIONES
    function nideah (a, b){         //nideah es el nombre de la funcion
        return a + b;               //a y b son los parametros que luego usaremos dentro de la funcion
    }                               //el return es lo que devolvera mi funcion luego de llevar a cabo las instrucciones que le di. Luego del return la funcion no continua leyendo.

    //Funciones declaradas
        function restar (a, b){
            return a - b;
        }
        //Funciones expresadas
        let multiplicar = function (a, b){
            return a * b;
        }
    //Para invocar a la función:
        multiplicar(2, 5);

    //Para guardar lo que retorna una funcion, lo debemos guardar en una variable:
        let guardar = multiplicar(2, 5);

// ACLARACIÓN: Si creamos una variable dentro de una funcion, su scope será LOCAL, es decir que solo existira dentro de esa funcion.



//CONDICIONALES
//IF
    if(condicion){
        //codigo a ejecutar si la condicion es verdadera
    }else{
        //codigo a ejecutar si la condicion es falsa
    }
    //se puede agregar un else if (condicion), entre el if y el else. Como segunda condicion a cumplirse. Si no se cumple la del if leerá la del else if, y si no se cumple esa leera la del else. Puedo agregar tantos else if como quiera.


//IF TERNARIO (es una linea de codigo resumida para hacer evaluaciones)
    condicion ? 'aca escribo el codig que quiero ejecutar si la condicion es TRUE' : 'aca escrino el codigo que quiero ejecutar si la condicion es FALSE'
    ej:
    5 < 2 ? 'Estas en lo cierto' : 'No gil';
    10 + 5 = 15 ? true : false; //Si no quiero que suceda nada en caso de ser falso, escribo un string vacio.
    //Se suele asignar a una variable, el resultado de un if ternario:
    let elMenor = 4 < 10 ? 'El 4 es menor' : 'El 10 es menor'



//SWITCH (se puede usar siempre y cuando quieras evaluar si una expresion es exactamente igual a un valor esperado)
    switch ('expresion que queres evaluar'){
        case 'aca va la expresion que queremos comparar con lo que pusimos dentro de los parentesis':
            //escribimos el bloque de codigo a ejecutar si este caso se cumple.
        break //si este primer caso se cumple, el break sirve para cortar ahi y no seguir evaluando los demas casos, y salir del switch.
        case 'otra expresion a comparar':
            //el codigo a ejecutar.
        break
        default:
            //bloque de codigo a evaluar si ninguno de los casos anteriores coincide con al expresion que estamos evaluando.
        break
    }

//ejemplo de switch:
let semaforo = 'verde'
switch(semaforo){
    case 'rojo':
        console.log('no cruces')
        break
    case 'amarillo':
        console.log('ya casi podes cruzar')
        break
    case 'verde':
        console.log('cruzá')
        break
    default:
        console.log('el semaforo no anda, precaucion.')
        break
}


//ARRAYS
    let miPrimerArray = ['rojo', 25, 32, 'azul']
    //javascript comienza a contar el ÍNDICE desde el 0, por lo tanto, el elemento 'rojo' esta en el índice 0, y el elemento 'azul' en el índice 3.
    miPrimerArray[2]    //para acceder al elemento 2 del array, en este caso 32.
    //Para saber la longitud del array
    miPrimerArray.length;   //en este caso la longitud es 4 (la longitud es la cantidad de elementos) Longitud no es lo mismo que índice.

        // .push
        miPrimerArray.push('15', 'verde'); // .push sirve para agregar AL FINAL de mi Array, la cantidad de elementos que yo quiera
        //mi array quedará así: ['rojo', 25, 32, 'azul', 15, 'verde']

        // .pop()
        mi PrimerArray.pop();   // .pop sirve para quitar el último elemento de mi array.
        // mi array ahora está así: ['rojo', 25, 32, 'azul', 15]

            //Para guardar el elemento que quitamos del array con el método .pop nos conviene realizar esto, guardando el resultado en una función, y de esa manera no perder dicho elemento:
            let comidas = ['milanesa', 'ravioles', 'pollo', 'canelones']
            let elUltimo = comidas.pop()     
            console.log(comidas);      // 'canelones'

        // .shift()
        let nombres = ['Sofi', 'Agus', 'Ale'];
        let primerNombre = nombres.shift();
        console.log(nombres)    // La consola me mostrará --> ['Agus', 'Ale']
        console.log(primerNombre)    // La consola me mostrará --> 'Sofi'

        // .unshift
        let nombres = ['Sofi', 'Agus', 'Ale'];
        nombres.unshift('Mel');
        console.log(nombres)    // La consola me mostrará --> ['Mel', 'Sofi', 'Agus', 'Ale']

        //indexOf
            //Sirve para preguntar al array el INDICE en el que se encuentra uno de mis objetos
        let juguetes = ['pelota', 'soga', 'cartas', 'auto', 'lapices']
        juguetes.indexOf('auto')  // El resultado será 3.
            //Si el objeto que buscamos no se encuentra dentro del array, el resultado será -1. Ej:
                juguetes.indexOf('muñeco')  // -1

        //lastIndexOf()
            //Sirve para preguntar al array el ÚLTIMO INDICE en el que se encuentra uno de mis objetos, en cqaso de que se repitiera dentro del array por ejemplo.
                let numeros = [2, 5, 8, 3, 1, 5, 9, 5]
                numeros.lastIndexOf(5)    // El resultado será 7. En cambio si yo usara indexOf(5) el resultado sería 1.

        //join
            //Sirve para unir todos los elementos de mi array separados por una coma (el resultado del join será un string)
                let numeros = [2, 5, 8, 3]
            //Usualmente este valor queremos guardarlo en una variable:
                let stringNumeros = numeros.join()
                console.log(stringNumeros)      // La consola me mostrará --> 2,5,8,3
            //Si quiero separar mis elementos por algo que no sea una coma, se lo debo pasar como parámetro dentro de los paréntesis, y entre comillas:
                let stringNumeros = numeros.join('*')   //Puedo usar como separador cualquier caracter que yo quiera
                console.log(stringNumeros)      //La consola me mostrará --> 2*5*3*8


//BUCLES

    //for
    for (let i=1; i<=10; i++){
                        //Si la condición dentro del paréntesis (i<=10) se cumple, se ejecutará lo q hay dentro de estas llaves
    }
        //let i = 1 es la VARIABLE INICIALIZADORA, q define en que número vamos a comenzar a iterar.
        //i<=10 es la CONDICIÓN A EVALUAR, que define CUÁNTAS ITERACIONES hará ese mismo ciclo.
        //i++ es el MODIFICADOR de la variable inicializadora. Permite incrementar o decrementar dicha variable (i=1) según lo que necesitemos.

    //ejemplo de un for:
        for (let i=3; i<=6; i++){
            console.log(i * 10);
        }
        //La consola hará, según lo que indica el for:
            // 3*10
            // 4*10
            // 5*10
            // 6*10
        // En la consola se mostrará:
            // 30
            // 40
            // 50
            // 60
        //Cuando el for llega al 6 y da la siguiente vuelta, i pasa a valer 7, y esto ya no cumple con la condición dada (i<=6). Por lo tanto, el for se frena y no se ejecuta nada más.

        //ACLARACIÓN IMPORTANTE: Cuando realizamos un for, tenemos que asegurarnos que la condición en algún momento se volverá FALSE, de lo contrario el for seguirá haciendo una vuelta tras otra y al no llegar nunca al momento en que la condición se vuelva falsa, habremos creado un bucle INFINITO. Y esto no está copado ja.

//ARROW FUNCTIONS
        //Es como una función, pero de forma más acotada y simple. Tiene que ir dentro de una variable, y la función "tomará el nombre" de la variable
        let elDoble = numero => numero * 2;     //"numero" es el parámetro que va a recibir mi función, luego va el operador flecha, y luego la línea de código que quiero ejecutar
        console.log(elDoble(4));    //Se llama a la arrow function igual que a la función común

        //Si tengo más de un parámetro, estos sí van entre paréntesis; sino no es necesario. Y voy a usar llaves si lo que va dentro de mu funcion tiene mas de una linea de codigo.
        let esMultiplo = (numero1, numero2) => {
            let resto = numero1 % numero2;
            return resto == 0;
        };
//CALLBACKS
        //Utilizar una función como parámetro de otra función
        
        function nombreCompleto(nombre, apellido){
            return nombre + ' ' +  apellido
        };
        function saludar (nombre, apellido, callback){
            return 'Hola ' + callback(nombre, apellido)
        };
        // Ejecuto la función con el callback dentro
        saludar('Sofi', 'Perez', nombreCompleto);
//CLOSURES
        //Son funciones anidadas, es decir funciones dentro de otras funciones
        //El closure existe solo dentro de la función contenedora, y existen solo cuando esta es ejecutada. Una vez terminada su ejecucion, deja de existir, para optimizar espacio en la memoria
        //Tiene acceso a todos los parámetros y varibles que la contenedora esta recibiendo o declarando sin tener que pasarlas como parametro
        function saludoPersonalizado(nombre){
            let saludoGenerico = 'Hola'
            function saludar() {
                return saludoGenerico + ' ' + nombre
            }
            return saludar ()
        };

//DESTRUCTURING
        //en un array
        let frutas = ['Manzana', 'Pera', 'Banana', 'Naranja']
        let [frutaRoja, , frutaAmarilla] = frutas  // Si algun elemento no lo quiero hacer variable, dejo el espacio libre
        console.log(frutaRoja);  //Ahora existe una variable que se llama frutaRoja y su valor es 'Manzana'
        console.log(frutaAmarilla);  //Ahora existe una variable que se llama frutaAmarilla y su valor es 'Banana' 

        //en un objeto literal
        let familia {
            padre: 'Luis',
            madre: 'Ale',
            hermana: 'Agus',
            perra: 'Mila'
        }

        let {madre, perra} = familia    ////Cuando desestructuramos un objeto literal, la variable tiene que tener el nombre exacto del atributo que tiene el valor que necesito.
        //Ahora existe una variable que se llama madre y su valor es 'Ale' y una variable llamada perra y su valor es 'Mila'
//OBJETOS LITERALES
        let miPais = {
            nombre: 'Argentina',    //nombre es la CLAVE/PROPIEDAD y 'Argentina' es el VALOR.
            poblacion: 40900200,
            capital: 'Buenos Aires',
            patriotismo: function(){         //Cuando tenemos una función como valor de un objeto, a esta se le dice MÉTODO
                return 'Amo mi país, ' + this.nombre    //El this es para llamar al objeto en el cual estamos escribiendo el this (en este caso, el objeto miPais)
            }
        }
        //Para acceder a estas propiedades:
        console.log(miPais.capital)     //Nos devolverá el valor Buenos Aires
        console.log(miPais.patriotismo());    //Para acceder al método y ejecutarlo

//FUNCIONES CONSTRUCTORAS
        function Auto (marca, modelo){      //La función constructora será como un molde.
            this.marca = marca,
            this.modelo = modelo
        };

        let auto1 = new Auto('Fiat', 'Palio');
        let auto2 = new Auto('Chevrolet', 'Meriva');
        console.log(auto1);
        console.log(auto2);

//SPREAD OPERATOR
        // Utilizado en variables
        let numeros = [1, 2, 3]
        let masNumeros = [4, 5, 6]
        let todosLosNumeros = [...numeros, ...masNumeros]

        // Utilizado en objetos
        let generoComedia = {
            nombreGenero: 'Comedia',
            popularidad: 3
        }
        let miPobreAngelito = {
            nombre: 'Mi pobre angelito',
            duracion: 120,
            ...generoComedia
        }
        let quePasoAyer = {
            nombre: 'Qué paso ayer?',
            duracion: 110,
            ...generoComedia
        }
        console.log(miPobreAngelito);
        console.log(quePasoAyer);       // Voy a obtener el objeto con las propiedades que teniía y las propiedades del objeto generoComedia que le agregue mediante el spread operator
        
        // Utilizado en funciones
        function peliculasVistas(...nombresDePeliculas){
            return nombresDePeliculas
        }
        console.log(peliculasVistas('El Jardin Secreto', 'Freedom Writers'))
        // Un ejemplo distinto de spread operator en funciones
        function peliculasVistas(...nombresDePeliculas){
            for(let i = 0; i<nombresDePeliculas.length; i++){
                console.log('Ya vio la película ' + nombresDePeliculas[i])
            }
        }
        peliculasVistas('El Jardin Secreto', 'Freedom Writers');

// METODOS DE ARRAYS AVANZADOS --- La mayoría reciben una función como parametro (callback)

    // .map() --- Recorre un array y devuelve un nuevo array modificado en base al que recorrió.
        let numeros = [2, 5, 8];
        let elDoble = numeros.map(function(num){         // Yo dentro del parametro puedo poner cualquier cosa, pero me conviene ser representativa de lo que quiero referir.
            return num * 2;                      // .map ya viene configurado para comprender que el parametro que yo ponga hará referencia siempre a los elementos de mi array.
        });

        console.log(elDoble);           // Resultado: [4, 10, 16]. No es necesario que le pase el parametro porque .map ya sabe a que hace referencia el parametro.

        // Este array avanzado, de manera de arrow function podria escribirse asi:
            let elDoble = numeros.map(num => num * 2);

    // .filter() --- Recorre el array y filtra segun la condicion que haya dentro del callback. 
        let edades = [29, 32, 14, 18, 10, 25];
        let mayores = edades.filter(function(edad){
            return edad >= 18;
        })

        console.log(mayores)    // Resultado: [29, 32, 18, 25]
        // Devuelve un array que contiene UNICAMENTE los elementos que hayan cumplido con dicha condición. Si los elementos son objetos, devuelve los objetos enteros, dentro del array.
        // Como se veria este metodo con arrow function:
            let mayores = edades.filter(edad => edad >= 18);
        
    // .reduce() --- Recorre el array y devuelve un único valor. Su callback recibe dos parámetros: el acumulador, y el elemento.
        let nums = [3, 5, 8];
        let sumaNumeros = nums.reduce(function(acum, num)){     //El acumulador es como la variable donde se va a ir guardando la acumulacion de todos los elementos (sumados, multiplicados, o lo que le digamos en el return)
            return acum + num;
        }

        console.log(sumaNumeros)        // Resultado: 16
        
        // Con arrow function:
            let sumaNumeros = nums.reduce((acum, num) => acum + num);
        // ACLARACION: Si los elementos del array sobre los que estoy operando son objetos, entonces los parametros del reduce deben incluir un 0, o el numero que yo quiera, para indicarle al acum que tome ese numero como valor inicial para la cuenta que va a realizar:
            let sumaNumeros = nums.reduce((acum, num) => acum + num, 0);
        
    // .forEach() --- Su funcion es iterar sobre un array, y no retorna nada. Con el callback le digo que accion quiero realizar con cada elemento sobre el cual va a iterar.
        let paises = ['Argentina', 'Cuba', 'Perú'];
        paises.forEach(function(pais){
            console.log(pais)
        })

        //Con arrow function:
        paises.forEach(pais => console.log(pais));      //Si ejecuto la consola, me aparecerá por separado cada uno de los paises de mi variable 'paises'
    
    // .slice() --- Devuelve una copia de una parte del array. No tiene callback, lleva directamente como parámetros, se llaman inicio y un fin
        let numeritos = [2, 3, 4, 8, 10, 1];
        let subArray = numeritos.slice(0, 4);
    
        console.log(subArray);      // Resultado: [2, 3, 4, 8]
        //Tengo más ejemplos de este método en mi archivo slice.js


    // .splice() --- Nos sirve para eliminar y/o agregar elementos en un array. Tres parámetros: Inicio, cantidad, item (Puedo agregar la cantidad de items que quiera)
        let colores = ['Rojo', 'Amarillo', 'Verde', 'Azul'];
        colores.splice(1, 2, 'Naranja', 'Violeta');     //El primer parámetro indica la posición en la cual estará ubicado el nuevo item que agregue, y además la posición del elemento que eliminaré, si es que elimino alguno.
    
        console.log(colores);       // Resultado: ['Rojo', 'Naranja', 'Violeta', 'Azul']
        // Si quiero guardar los que elimino, realizo el splice en una variable:
            let numeros = [1, 4, 8, 3];
            let cambioNumeros = numeros.splice(2, 2);
            console.log(cambioNumeros);     // Resultado: [8, 3]
            console.log(numeros);           // Resultado: [1, 4]

    // .sort() --- Nos sirve para ordenar los elementos de un array. Puedo utilizar un callback como parámetro, donde le aclaro la forma en que quiero reordenar el array.
        // Si omito el callback y no le paso ningùn parmámetro, el sort utiliza el modo predeterminado que tiene para reordenar
            let palabras = ['Arbol', 'Tortuga', '4G1', 'Grifo', '3D', 'Abuelo', '3B', 'Linterna', '4D'];
            palabras.sort();
            console.log(palabras);          // Resultado: [ '3B', '3D', '4D', '4G1', 'Abuelo', 'Arbol', 'Grifo', 'Linterna', 'Tortuga']
        
            //Este método predeterminado funciona así:
            // Si el array es de strings, los ordenará alfabéticamente
            // Si el array es de strings mezclado con números, los números irán primero, de menor a mayor, y luego los strings ordenados alfabéticamente
            // Si algún elemento del array tuviera un string conteniendo un número (ej: '3D'), se priorizará de igual forma los números, estando este antes que cualquier otro string que solo contenga letras.
            
            // Si el array es solo de números, no se puede utilizar el método de reorden predeterminado, ya que funcionará mal; es necesario utilizar un callback para aclararle la forma de reordenar los elementos.
            let numeros = [5, 1, 6, 9, 10, 7];
            numeros.sort((a, b) => a-b);        // a-b implica del menor al mayor, si quiero de mayor a menor pongo b-a
            console.log(numeros);           // Resultado: [1, 5, 6, 7, 9, 10,]
    
    // .flat() --- Me sirve para arrays que contienen otros arrays dentro. Puedo cambiar de nivel estos subarrays, para que estén todos en un mismo nivel y no haya más subarrays por ejemplo.
        let numeros = [ 2, 7, 5, 9, [10], 8, 3, [21, [15, [25, 6]]], 12];
        let flatNivel1= numeros.flat();     //El parámetro indica los arrays de qué nivel queremos "bajar a un nivel menos". Si no le paso parámetro asume que queremos modificar los de nivel 1. Va de afuera hacia adentro, cuanto más dentro está eñ subarray, más alto el nivel de profundidad.
        let flatNivel2 = numeros.flat(2);
        let flatNivel3 = numeros.flat(3);
    
        console.log(flatNivel1);        // Resultado: [ 2, 7, 5, 9, 10, 8, 3, 21, [ 15, [ 25, 6 ] ], 12 ]
        console.log(flatNivel2);        // Resultado: [ 2, 7, 5, 9, 10, 8, 3, 21, 15, [ 25, 6 ], 12 ]
        console.log(flatNivel3);        // Resultado: [ 2, 7, 5, 9, 10, 8, 3, 21, 15, 25, 6, 12 ]  Nuestro array quedó aplanado por completo; todos los elementos se encuentran en un mismo nivel.

    // .includes() --- Nos sirve para determinar si nuestro array incluye un elemento. Nos devuelve true en caso de coincidencia y false en caso contrario.
        // Recibe dos parámetros: el primero le indica el elemento que deseamos buscar, es obligatorio este parámetro. El segundo indica a partir de qué posición deseamos comenzar a buscar; de ser omitido este último, se asume arrancar de la posición 0.
            let letras = ['a', 'j', 'l', 'F', 's', 'T', 'z'];
            let buscarLetra = letras.includes('j');
            let buscarLetraDesde = letras.includes('j', 2);
            let buscarLetraMayus = letras.includes('Z');

            console.log(buscarLetra);           // Resultado: true
            console.log(buscarLetraDesde);      // Resultado: false. (No encuentra el elemento porque le dijimpos que buscara a partir de la posición 2, y la 'j' está en la posiciñon 1)
            console.log(buscarLetraMayus);      // Resultado: false. (No encuentra el elemento porque includes() distingue entre mayúsculas y minúsculas)

    // .find() --- Devuelve el primer elemento de un array que cumple con una función dada como parámetro (callback)
        let animales = [
            {
                tipo: 'Perro',
                cantidadPatas: 4
            },
            {
                tipo: 'Pajaro',
                cantidadPatas: 2
            }
        ];

        let buscarPerro = animales.find(animal => animal.tipo === 'Perro');     // El parámetro 'animal' va a hacer referencia a cada elemento de mi array (en este caso a cada objeto), y no tengo que aclararselo porque ya viene "configurado" de esa forma este método .find()
        console.log(buscarPerro);       // Resultado: { tipo: 'Perro', cantidadPatas: 4 }

        