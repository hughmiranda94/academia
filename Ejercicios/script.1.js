'use strict';

// (function(){
//     const Luis = {
//         name: 'Luis',
//         lastName: 'Pérez',
//         address:{
//             street: '1st Avenue',
//             city: 'NY'
//         }
//     }
//     console.log(Luis);
//     const Mario = {...Luis, address:{...Luis.address}};
//     Mario.name = 'Mario';
//     Mario.address.street = '2nd Avenue';
//     console.log(Mario);
//     console.log(Luis);

//     const array1 = [1,2,3];
//     const array2 = array1;
//     array2.push(4);
//     console.log(array1);
//     console.log(array2);
// })();

(function(global){
    const stateGenerator = (inisitalState)=>{
        const state = inisitalState;
        return{
            getState: () => ({...state}),
            agregarAlumno: (alumno) => {state.alumnos.push(alumno)}
        }
    }
    global.stateGenerator = stateGenerator;
})(window);