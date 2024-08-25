// Operadores Aritiméticos (Matemáticos)
// Operadores Atribuição
// Operadores de Comparação
// Operadores Lógicos
// Operadores Bitwise

// Operadores Aritiméticos (Matemáticos)
let salario = 100;

// +, -, /, *, **

 console.log(salario ** salario);
 console.log(salario + salario);
 console.log(salario - salario);
 console.log(salario / salario);

 //Operadores de incremento e decremento
 // ++, --

// console.log(-- salario);

salario += salario;
console.log(salario);

//Operadores de igualdade
//Igualdade estrita "===" compara os valores e o tipo

console.log(1 === 1);//True
console.log(1 === '1');//false

//Igualdade solta
console.log(1 == 1);//True
console.log(1 == '1');//True

//Operador ternário útil para evitar muitos "IFs"

let pontosCliente = 51;
let tipo = pontosCliente > 50? 'premium' : 'comum';
console.log(tipo);//premium

//Operadores lógicos and(&&), or (||), not (!)
//Retorna true se os dois operandos forem iguais

console.log( true && true);//true
console.log( false && true);//false
console.log( false && false);//true

//Para o candidato ser elegível, ele precisa ser maior de idade e ter CNH

let maiorIdade = 18;
let cnh = true;
idadeCandidato = 28

function verificarMaiorIdade(idadeCandidato){
   
    if(idadeCandidato>=maiorIdade){
        return true;
    }else if(idadeCandidato <= maiorIdade){
        return false;
    }

    //idade >= 18? 'maior':'menor';
}


console.log(verificarMaiorIdade(idadeCandidato));

candidatoElegivel = (verificarMaiorIdade(idadeCandidato) && cnh);
console.log("Candidato Elegível? "+ candidatoElegivel); 

//Operador not
let candidatoRecusado = !candidatoElegivel;
console.log("Candidato Recusado? "+ candidatoRecusado);
