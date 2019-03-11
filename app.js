
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// let base = 'cdd';
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite)
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(archivo=>console.log(`Archivo creado: ${archivo.green} `))
        .catch(e =>console.log(e))
        break;
    default:
        console.log('Comando no reconocido')
}


// console.log(argv.base);
// console.log('Limite',argv.limite);
// console.log(argv2);
// let parametro = argv[2]
// let base = parametro.split('=')[1]
//
// crearArchivo(base)
//     .then(archivo=>console.log(`Archivo creado: ${archivo} `))
//     .catch(e =>console.log(e))