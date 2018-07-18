'use strict'

//console.log('Welcome to Node');
// setTimeout(function () {
//     console.log('too late');
// }, 2000);

//se crea la promesa
// const promise = new Promise((res,rej)=>{
//     //res('hola');
//     // let cont=0;
//     // for(let i =0; i<99999; i++)
//     // {
//     //     cont++;
//     //     console.log(i);
//     // }
//     // res(cont);
//     setTimeout(()=>res('timeout'),5000);
// });

//se consume la promesa
// console.log('1');
// promise.then((res)=>console.log(res));
// console.log('2');


// (()=>{

//     console.log('hello');
//     fetch('/cars')
//     .then((res)=>{
//        return res.json();
//     })
//     .then((cars)=>{
//         console.log(cars);
//         const carsNames = cars.map((car)=>{
//             return{
//                 name: car.name,
//                 pesos_value: car.dollar_value*18
//             }
//         });
//         console.log(carsNames);
//     })
// })();

// (()=>{
//     fetch('/alumnos')
//     .then((res)=>{
//        return res.json();
//     })
//     .then((alumnos)=>{
//         console.log(alumnos);
//         const alumnosReprobados= alumnos.filter((alumno)=>alumno.promedio<60);     
//         const alumnosAsesorias= alumnos.filter((alumno)=>alumno.promedio>=60&&alumno.promedio<80);      
//         const alumnosBecados= alumnos.filter((alumno)=>alumno.promedio>=80);
//         console.log(alumnosReprobados);
//         console.log(alumnosAsesorias);
//         console.log(alumnosBecados);
//     })
// })();

console.log(1);

const promise = new Promise((res, rej) => {
    fetch('/alumnos').then((res) => {
        return res.json();
    }).then((alumnos) => {
        res({
            alumnosReprobados: alumnos.filter((alumno) => alumno.promedio < 60),
            alumnosAsesorias: alumnos.filter((alumno) => alumno.promedio >= 60 && alumno.promedio < 80),
            alumnosBecados: alumnos.filter((alumno) => alumno.promedio >= 80),
        })
    })
});

console.log(2);

promise.then((res) => {
    const tiposDeAlumnos = [res.alumnosReprobados, res.alumnosAsesorias, res.alumnosBecados];
    console.log('REPROBADOS:');
    tiposDeAlumnos[0].forEach(alumno => console.log(alumno.nombre));
    console.log('Promedio:');
    let promTotalesR = tiposDeAlumnos[0].map(x => { return x.promedio; });
    console.log(promTotalesR);
    let promalumnosR = promTotalesR.reduce((total, sum) => {
        return total + sum;
    });

    console.log(promalumnosR / tiposDeAlumnos[0].length);
    console.log('=============');
    console.log('ASESORIAS:');
    tiposDeAlumnos[1].forEach(alumno => console.log(alumno.nombre));
    console.log('Promedio:');
    let promTotalesA = tiposDeAlumnos[1].map(x => { return x.promedio; });
    console.log(promTotalesA);
    let promalumnosA = promTotalesA.reduce((total, sum) => {
        return total + sum;
    });
    console.log(promalumnosA / tiposDeAlumnos[1].length);
    console.log('=============');
    console.log('BECADOS:');
    tiposDeAlumnos[2].forEach(alumno => console.log(alumno.nombre));
    console.log('Promedio:');
    let promTotalesB = tiposDeAlumnos[2].map(x => { return x.promedio; });
    console.log(promTotalesB);
    let promalumnosB = promTotalesB.reduce((total, sum) => {
        return total + sum;
    });
    console.log(promalumnosB / tiposDeAlumnos[2].length);
    console.log('=============');
    console.log('TODO:');
    console.log(res);
    const tipoRan = Math.floor(Math.random() * tiposDeAlumnos.length);
    console.log('Random test =')
    switch (tipoRan) {
        case 0:
            console.log('REPROBADOS:');
            break;
        case 1:
            console.log('ASESORIAS:');
            break;
        case 2:
            console.log('BECADOS:');
            break;
        default:
            break;
    }
    console.log(tiposDeAlumnos[tipoRan][Math.floor(Math.random() * tiposDeAlumnos[tipoRan].length)].nombre);
});

console.log(3);

let daArray = [0, 1, 2, 3, 4, 5];
let msg = daArray.reduce((total, sum) => {
    if (sum % 2 == 0) {
        return total + sum;
    }
    else {
        return total;
    }
});
console.log(msg);