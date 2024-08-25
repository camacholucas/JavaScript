// 1 For
// 2 while
// 3 do while
// 4 for in
// 5 for of

// for (let i = 0; i <= 5; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// //While loop, você precisa declarar a variável de índice fora do loop

//  let i = 10;

// while(i>=1){
    
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i--;
// }

// //do while
// let i =0;
// do{
//     console.log('Digitando' + i);
//     i++
// }while( i < 10)

//for in
const pessoa = {
    nome: 'Lucas',
    idade: 25
};

for(let key in pessoa){
    console.log(key,pessoa['nome']);
}

const cores = ['a','b','c']

for (let indice in cores){
    console.log(indice,cores[indice]);
}

//for-of iteração sobre arrays
for(let cor of cores){
    console.log(cor);
}