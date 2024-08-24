/** No JavaScript, as palavras-chave let e var são usadas para declarar variáveis. A principal diferença entre elas é o escopo: 
let
As variáveis declaradas com let têm escopo de bloco, ou seja, são limitadas ao bloco, instrução ou expressão em que são usadas. Por exemplo, pode usar let quando precisa de uma variável que pode mudar de valor ao longo do tempo. 
var
As variáveis declaradas com var têm escopo global ou de função, ou seja, são visíveis em todo o escopo da função em que foram declaradas, independentemente de blocos condicionais ou loops. Por exemplo, pode usar var quando está a lidar com código legado que precisa manter. 
Outras diferenças entre let e var incluem: 
let não é inicializada, enquanto var é inicializada como undefined. Por isso, se tentar usar uma variável let antes de a declarar, terá um Reference Error. 
As variáveis declaradas com var podem ser utilizadas mesmo antes de serem declaradas, graças ao hoisting. As variáveis criadas com let só podem ser utilizadas após a sua declaração, pois, apesar de serem elevadas, não são inicializadas. 
Em 2015, a versão ES2015 (ES6) do JavaScript introduziu os identificadores let e const para variáveis, além da palavra-chave var. **/

let idade = 5
console.log(idade);

let altura = 180;
console.log(altura)

//camelCase
let nomeCompleto = 'Lucas Camacho'
console.log(nomeCompleto);

//Variáveis constantes não podem ter seus valores redefinidos

const valorIngresso = 25;

//TypeError: Assignment to constant variable.
//valorIngresso = 20;
console.log(valorIngresso);