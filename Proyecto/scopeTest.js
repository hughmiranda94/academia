'use strict';

function scopeTest(){
    const saludos = 'hola';
    const saludador = function(){
        console.log(saludos);
    }
    setTimeout(saludador, 3000);
}

scopeTest();
console.log('beat ya');