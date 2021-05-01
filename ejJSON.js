// pido el modulo file system
const fs = require('fs')
fs.writeFileSync('pruebadeJSON.txt', 'Hola mundo ahre pt')
// utilizando el modulo leo el json clases 
let clasesJSON = fs.readFileSync('./JSONclases.json','utf-8')

// parseo el string con el json a un array de objetos
let clases = JSON.parse(clasesJSON);

// Muestro por pantalla para asegurarme que realicè bien el parse y que mi información del json ahora tiene formato array
console.log(clases)

// Para transformarlo en formato JSNO nuevamente, en caso de que quisiera:
let clasesString = JSON.stringify(clases);
console.log(clasesString);


// Si quisiera crear un archivo desde el formato json, lo realizo así:
// fs.writeFileSync('pruebadeJSON.txt', 'Hola mundo ahre pt')
// Y se crea el archivo. Si el archivo ya existía, se elimina el contenido y se reemplaza por el nuevo que asignamos recién

// fs.appendFileSync():
// Realiza lo mismo que fs.writeFileSync() pero este no elimina el contenido que habìa en el archivo, sino que escribe a continuación de lo que ya hay.

//exporto mis clases
module.exports = clases