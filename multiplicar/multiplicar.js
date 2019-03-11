//Requireds
const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');
let listarTabla = (base, limite = 10) =>{
    console.log('===================='.green);
    console.log(`tabla del ${base}`);
    console.log('===================='.green);
    for (let i = 1; i<=limite; i++){

        // console.log('2x'+ i+'='+base*i);
        console.log(`${base}*${i}=${base*i}`);
    }//
}

let crearArchivo = (base,limite=10) =>{
    return new Promise((resolve,reject)=>{
        if (!Number(base) && !Number(limite))
            reject('No es un numero');
        return;
        let data1 = '';

        for (let i = 1; i<=limite; i++){

            // console.log('2x'+ i+'='+base*i);
            data1 +=`${base}*${i}=${base*i}\n`;
        }//
        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}`, data1, (err) => {
            if (err)
                reject(err)
            else
            resolve(` tabla-${base}.txt`);
        })

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
