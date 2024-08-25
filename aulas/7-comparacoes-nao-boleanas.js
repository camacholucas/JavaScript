/* 
Falsy(
    undefined
    null
    0
    false
    ''
    NaN
)

//Truthy
*/

//Em comparações não boleanas, o JS pega o primeiro valor Truthy para fazer a comparação e ignora o resto.

let corPersonalizada = "";
let corPadrao = "branco";
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);