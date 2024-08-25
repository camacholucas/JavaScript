//If, Else

//Se a hora estiver entre 06:00 até 11:59 : Bom dia!
//Se estiver entre 12:00 até 18:00 : Boa tarde!
//Caso contrário : Boa noite!

let nota = 10;

function aprovacao(){
if(nota >= 6 && nota <= 10){

    return "Parabéns, você está aprovado!";
}

else if(nota <= 6 && nota >= 0){
    
    return "Você está reprovado!";
}

else{
    return "Você digitou o número: (" + nota + "). Digite uma nota entre 0 e 10";
}
}

console.log(aprovacao());
