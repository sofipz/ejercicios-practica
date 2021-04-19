// Ejercicio del Playground
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];
let [ , bariloche, , china] = destinosDelMundo;
console.log(bariloche);
console.log(china);

//Probando descubrí que haciendo esto, me muestra la inicial del elemento del Array, no entiendo muy bien por qué
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];
let [bariloche] = destinosDelMundo[1];
let [china]= destinosDelMundo[3];
let [grecia]= destinosDelMundo[4];

console.log(bariloche);
console.log(china);
console.log(grecia)
