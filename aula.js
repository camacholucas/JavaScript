let etanol = 3.4;
let gasolina = 5;
let distancia = 100;
let gastoMedio;
let tipoCombustivel = "etanol"; // ou "gasolina"

if (tipoCombustivel === "etanol") {
  gastoMedio = distancia * etanol;
} else {
  gastoMedio = distancia * gasolina;
}

console.log(gastoMedio);


let numero = 10

let epar = numero % 2 === 0

if (epar){
    console.log('Par!')
}else{
    console.log('Impar!')
}