/* **Exercícios de revisão:**

| Exemplo 01 | Descrição |
| --- | --- |
| `Variaveis` | Vamos criar variaveis usando let, const e var, atribuir valores, identificar comportamentos
 e saídas quando tentarmos recuperar. |

*/
console.log('-----Exercio 1------')
{
    var age = 11;
}

console.log(age)

//Depois trocar para let

{
    let age = 22;
}

console.log(age)


//console.log(name)
let name = "Simara"; //vai dar erro

console.log(myLastName)
var myLastName = "Conceição";


/*
| Exemplo 02 | Descrição |
| --- | --- |
| `Concatenar x interpolar` | Vamos criar variaveis usando let, const e var, atribuir strings e vamos concatenar e interpolar. |


*/
console.log('-----Exercio 2------')
//concatenando
console.log('Hello' + ' ' + "World")
// Vai imprimir Hello World

console.log('Hello' + "World")
//Vai imprimir sem espaço HelloWorld

myName = "Simara";
console.log('Hello' + " " + myName)
//Vai imprimir Hello Simara

//interpolando
myName = "Simara";
console.log(`Hello ${myName}`)
//Vai imprimir Hello Simara


/*
| Exemplo 03 | Descrição |
| --- | --- |
| `Média entre números` | Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos. |

*/

console.log('-----Exercio 3------')

function calculaMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        return 'Aprovado'
    }

    if (media >= 5 && media < 7) {
        return 'Recuperação'
    }

    if (media < 5) {
        return 'Reprovado'
    }
}

console.log(calculaMedia(8, 5, 8))


/*

| Exemplo 04 | Descrição |
| --- | --- |
| `Quero lucrar` | Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que
 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%? |

*/

console.log('-----Exercio 4------')

let valorBike = (300 * 100) / 60;
let lucro = (valorBike * 0.25) + valorBike;

console.log(`O valor da bicicleta é: R$ ${valorBike.toFixed(2)}`);
console.log(`O valor para obter 25% de lucro é: R$ ${lucro.toFixed(2)}`);


/*
| Exemplo 05 | Descrição |
| --- | --- |
| `Quero somar` | Faça um programa que peça dois números e imprima no console a soma desses dois números.|
*/

console.log('-----Exercio 5------')

function soma(num1, num2) {
    let resultado = num1 + num2;
    console.log(`SOMA = ${resultado}`);
}
soma(6, 10);


/*
| Exemplo 06 | Descrição |
| --- | --- |
| `Desapegada` | Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, 
por quanto devo vendê-lo descontando 25%? |

*/

console.log('-----Exercio 6------')

let valorNote = 3000;
let valorDesconto = (3000 * 0.75);

console.log(`O valor com desconto 25% de lucro é: R$ ${valorDesconto.toFixed(2)}`);

/*
| Exemplo 07 | Descrição |
| --- | --- |
| `conversor de medidas` | Escreva um programa que receba um valor em metros e o exiba no console convertido
 em milímetros. |
*/

console.log('-----Exercio 7------')

let valorMetros = 2;
let valorMilimetro = valorMetros * 1000;

console.log(`${valorMetros} metro(s) equivale à ${valorMilimetro} milímetros`);

/*
| Exemplo 08 | Descrição |
| --- | --- |
| `Semaforo, sinal ou sinaleira?` | Utilizando os conceitos que estudamos, vamos criar um programa que 
funcionará como um sinal de transito. |
*/

console.log('-----Exercio 8------')

let sinal = 'verde';

if (sinal === 'vermelho') {
    console.log('PARE!');
} else if (sinal === 'amarelo') {
    console.log('ATENÇÃO!')
} else {
    console.log('SIGA EM FRENTE!')
}

/*
| Exemplo 09 | Descrição |
| --- | --- |
| `FizzBuzz` | Utilizando os conceitos que estudamos, vamos criar um programa 
que irá imprimir 'FizzBuzz' para números divisiveis por 3 e 5,
para números divisíveis por 3 irá impirmir 'Fizz'
 e para números divisíveis por 5 irá imprimir 'Buzz' 
 e por fim, se não cumprir nenhum dos casos acima imprime o próprio número. |
*/

console.log('-----Exercio 9------')

function fizzBuzz(valor) {
    if (typeof valor !== 'number') {
        return 'Não é um número'
    } else if (valor % 3 == 0 && valor % 5 == 0) {
        return 'FizzBuzz';
    } else if (valor % 3 == 0) {
        return 'Fizz';
    } else if (valor % 5 == 0) {
        return 'Buzz';
    } else if (valor % 3 !== 0 && valor % 5 !== 0) {
        return valor;
    }
}
let resultado = fizzBuzz(3);
console.log(resultado);

/*
| Exemplo 10 | Descrição |
| --- | --- |
| `É dia de aula?` | Utilizando os conceitos que estudamos, vamos criar um programa que irá 
nos informar os dias de aula para a nossa turma. |
*/

console.log('-----Exercio 10------')

let dia = 'sabado';
if (dia === 'segunda' || dia === 'terça' || dia === 'quarta' || dia === 'quinta' || dia === 'sexta') {
    console.log('Dia de aula!')
} else {
    console.log('Bom final de semana')
}

/*
| Exemplo 11 | Descrição |
| --- | --- |
| `IMC` | Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg. |
*/

console.log('-----Exercio 11------')

let altura, peso;


function calculaIMC(peso, altura) {
    let imc = peso / (Math.pow(altura, 2));
    console.log(imc);
    console.log(`IMC = ${imc.toFixed(2)} kg/m²`);

    if (imc < 18.5) {
        return 'MAGREZA'
    } else if (imc > 18, 5 && imc < 24.9) {
        return 'NORMAL'
    } else if (imc > 25 && imc < 29.9) {
        return 'SOBREPESO'
    } else if (imc > 30 && imc < 39.9) {
        return 'OBESIDADE'
    } else if (imc > 35 && imc < 40) {
        return 'OBESIDADE GRAVE'
    }
}
let resimc = calculaIMC(78.450, 1.69);
console.log(resimc);


/*
| Exemplo 12 | Descrição |
| --- | --- |
| `Par ou Impar` | Crie uma função que determina se um número é par ou impar.  |
*/

console.log('-----Exercio 12------')

let numip;

function imparPar(numip) {

    if (numip % 2 == 0) {
        return 'Número par'
        console.log();
    }
    else {
        console.log('Número impar');
    }
}
let resparimpar = imparPar(1)


/*
| Exemplo 13 | Descrição |
| --- | --- |
| `Tabuada` | Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. |
*/

console.log('-----Exercio 13------')

let numero = 2;

for (let i = 1; i <= 10; i++) {
    let resultado = i * numero;
    console.log(`${numero} x ${i} = ${resultado}`)
}

/*
| Exemplo 14 | Descrição |
| --- | --- |
| `Pares` |Imprima na tela os números pares existentes entre 0 e 100..|
*/

console.log('-----Exercio 14------')

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


/*
| Exemplo 15 | Descrição |
| --- | --- |
| `Conversor de temperatura` | Crie uma função que recebe uma temperatura em graus celsius retorna o valor 
convertido em Fahrenheit. |
*/

console.log('-----Exercio 15------')


 function fahCelsius (valor) {
     let resultado = valor * (9/5) + 32;
     console.log(resultado);
 }

 fahCelsius(20);

/*
| Exemplo 16 | Descrição |
| --- | --- |
| `Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. 
por exemplo:  3! = 3 * 2 * 1 // 6 |
*/

console.log('-----Exercio 16------')

let num = 1;
function fatorial (n) {
    for (let i = 1; i <= n; i++) {
        num *= i;
    }
    console.log(num);   
}
fatorial(5);


/*
| Exemplo 17 | Descrição |
| --- | --- |
| `Multiplica` | Crie uma função que recebe 2 parâmetros e retorna a multiplicação entre else. |
*/

console.log('-----Exercio 17------')


let resmult;
function mult(n1, n2) {
    resmult = n1*n2;
    console.log(resmult);
}
mult(2, 10);

/*
| Exemplo 18 | Descrição |
| --- | --- |
| `Porcentagem` | Crie uma função que calcula 5% de desconto retornando o valor do desconto.|
*/

console.log('-----Exercio 18------')

let desc;

function perc (preco) {
    desc = preco * 0.05;
    console.log(`O desconto é de: R$ ${desc.toFixed(2)} reais`);
}
perc(100);

/*
| Exemplo 19 | Descrição |
| --- | --- |
| `Conversor de moeda` | Crie uma função que irá converter uma quantia de real para dolar utilizando a 
cotação do dia. |
*/

console.log('-----Exercio 19------')

let dolar;

function conversao (real) {
    dolar = real * 5.26
    console.log(`O valor é: ${dolar.toFixed(2)} dólar americano`);
}
conversao(10);

/*
| Exemplo 20 | Descrição |
| --- | --- |
| `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console  conforme instruções:
    a) números de 1 a 50
    b) quando chegar no número 25 interrompa a instrução e pare o loop
    c) quando chegar no número 10 pule a instrução|
*/

console.log('-----Exercio 20------')

for (let i = 1; i <= 50; i++) {
    if (i === 10) {continue}
    if (i === 25) {break}

    console.log(i)
}


/*
| Exemplo 21 | Descrição |
| --- | --- |
| `10 em 10` | Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90
 imprima a palavra "CONTINUE".|
*/

console.log('-----Exercio 21------')

let resulcont;

for (let i = 20; i <= 100; i+=10) {
    resulcont = i;
    if (resulcont === 60 || resulcont === 90){
        resulcont = 'CONTINUE'
    }
    console.log(resulcont);
}

/*
| Exemplo 22 | Descrição |
| --- | --- |
| `conta bancária` | Vamos criar uma conta bancária com as 3 operações básicas? rs
    a) A conta deverá iniciar com o saldo de 100
    b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
    c) Deverá ser possível passar 1 valor para a operação escolhida
    d) Deverá retornar o resultado e imprimir no console o saldo atual|
*/

console.log('-----Exercio 22------')


function contaBancaria (operacao, valor) {
    let saldoInicial = 100;
    if (operacao === 'depositar') {
        let saldoAtual = saldoInicial + valor;
        let resultado = 'Depósito';
        console.log(`Operação selecionada: ${resultado}`);
        console.log(`Saldo Atual = R$ ${saldoAtual.toFixed(2)}`)
    } else if (operacao === 'sacar' && valor <= 100) {
        let saldoAtual = saldoInicial - valor;
        let resultado = 'Saque';
        console.log(`Operação selecionada: ${resultado}`);
        console.log(`Saldo Atual = R$ ${saldoAtual.toFixed(2)}`)
    } else if (operacao === 'sacar' && valor > 100) {
        let resultado = 'Saque';
        console.log(`Operação selecionada: ${resultado}`);
        console.log('Valor não disponível!')
    } else {
        let saldoAtual = saldoInicial;
        let resultado = 'Consultar Saldo';
        console.log(`Operação selecionada: ${resultado}`);
        console.log(`Saldo Atual = R$ ${saldoAtual.toFixed(2)}`)
    }
}
contaBancaria('depositar', 100)
contaBancaria('sacar', 50)
contaBancaria('sacar', 120)
contaBancaria('consultar saldo')


/*
| Exemplo 23 | Descrição |
| --- | --- |
| `5 em 5` | Crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".|
*/

console.log('-----Exercio 23------')

let resaiterando;

for (let i = 10; i <= 60; i+=5) {
    if (i === 35 || i === 45) {
        resaiterando = 'PULOU';
    } else {
        resaiterando = i;
    }
    console.log(resaiterando);
}

/*
| Exemplo 24 | Descrição |
| --- | --- |
| `Dias em horas` | Crie um algoritmo que converte dias em horas, quando recebe um número de dias.|
*/

console.log('-----Exercio 24------')

function converte (dias) {
    let resultado = dias*24;
    console.log(resultado + ' horas');
}
converte(4)

/*
| Exemplo 25 | Descrição |
| --- | --- |
| `É par` | Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.|
*/
console.log('-----Exercio 25------')

let resuldiv;

function divisao (a, b) {
    resuldiv = a/b;
    if (a % b === 0) {
        console.log(`Resultado da divisão: ${resuldiv}`)
        console.log(`${resuldiv} é par`)
    } else {
        console.log(`Resultado da divisão: ${resuldiv}`)
    }
}

divisao(20, 5);

/*
| Exemplo 26 | Descrição |
| --- | --- |
| `Repetição` | Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo:
    a) números de 1 a 100
    b) quando chegar no número 50 interrompa a instrução e pare o loop
    c) quando chegar no número 50 pule a instrução |
*/
console.log('-----Exercio 26------')


for (let i = 1; i <= 100; i++) {
    if (i === 50) {continue}
    if (i === 50) {break}

    console.log(i)
}

/*
| Exemplo 27 | Descrição |
| --- | --- |
| `Calculadora` | Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

    a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
    b) Deverá ser possível passar 2 números para a operação escolhida
    c) Deverá retornar o resultado e imprimir no console|
*/
console.log('-----Exercio 27------')

function calculadora (operacao, num1, num2) {
    if (operacao === 'soma') {
        console.log(num1+num2);
    } else if (operacao === 'subtração') {
        console.log(num1-num2);
    } else if (operacao === 'multiplicação') {
        console.log(num1*num2);
    } else if (operacao === 'divisão') {
        console.log(num1/num2)
    }
}
calculadora('soma', 5, 10)
calculadora('subtração', 50, 25)
calculadora('multiplicação', 2, 2)
calculadora('divisão', 100,5)


/*
| Exemplo 28 | Descrição |
| --- | --- |
| `Desconto` | Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto
 e o preço a pagar.|
*/

console.log('-----Exercio 28------')

function mercadoria (preco, desconto) {
    let valorDesconto = (desconto/100)*preco;
    let precoAPagar = preco - valorDesconto;

    console.log(`Valor total do desconto: R$ ${valorDesconto.toFixed(2)}`);
    console.log(`Preço à pagar: R$ ${precoAPagar.toFixed(2)}`);
}
mercadoria(500, 20)

/*
| Exemplo 29 | Descrição |
| --- | --- |
| `Viagem` | Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média
 esperada para a viagem..|
*/

console.log('-----Exercio 29------')

function tempo (distancia, velocidadeMedia) {
    let horas = distancia/velocidadeMedia;
    console.log(`Tempo de viagem: ${horas} horas`);
}
tempo(100, 80);


/*
| Exemplo 30 | Descrição |
| --- | --- |
| `Jantar` | Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.|
*/

console.log('-----Exercio 30------')

function jantar (valor) {
    let taxa = (valor*10)/100;
    let total = valor + taxa;

    console.log(`Taxa do garçom: R$ ${taxa.toFixed(2)}`);
    console.log(`Valor total à ser pago: R$ ${total.toFixed(2)}`);
}
jantar(150)



/*
| Exemplo 31 | Descrição |
| --- | --- |
| `Dia da semana` | Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.|
*/
console.log('-----Exercio 31------')

function diaSemana (numero) {
    if (numero === 1) {
        console.log('Hoje é Segunda-feira');
    } else if (numero === 2) {
        console.log('Hoje é Terça-feira');
    } else if (numero === 3) {
        console.log('Hoje é Quarta-feira');
    } else if (numero === 4) {
        console.log('Hoje é Quinta-feira');
    } else if (numero === 5) {
        console.log('Hoje é Sexta-feira');
    } else if (numero === 6) {
        console.log('Hoje é Sábado');
    } else {
        console.log('Hoje é Domingo');
    }
}

diaSemana(1);

/*
| Exemplo 32 | Descrição |
| --- | --- |
| `Números` | Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, 
se os números forem iguais, mostre uma mensagem no console "Os números são iguais".|
*/

console.log('-----Exercio 32------')

function numeros (num1, num2) {
    if (num1>num2) {
        console.log(`O primeiro número (${num1}) é maior`);
    } else if (num1<num2) {
        console.log(`O segundo número (${num2}) é maior`);
    } else {
        console.log('Os números são iguais');
    }
}
numeros(12,7)

/*

| Exemplo 33 | Descrição |
| --- | --- |
| `Impar/par` | Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.|
*/
console.log('-----Exercio 33------')

function parametro (numero) {
    if (numero%2 === 0) {
        console.log('Par')
    } else {
        console.log('Ímpar')
    }
}
parametro (5)


/*
| Exemplo 34 | Descrição |
| --- | --- |
| `Boletim escolar` | Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

        - Se a media for igual ou maior que 7 - Aprovado
        - Se a media for maior e igual a cinco e menor que 7 - Recuperação
        - Se a media for menor que 5 - Reprovado|
*/
console.log('-----Exercio 34------')

function notas (notaUm, notaDois, notaTres) {
    let media = (notaUm + notaDois + notaTres) / 3;
    if (media >= 7) {
        console.log('Aprovado')
    } else if (media >= 5 && media < 7) {
        console.log('Recuperação')
    } else {
        console.log('Reprovado')
    }
}
notas(8, 7, 9)

/*
| Exemplo 35 | Descrição |
| --- | --- |
| `Maior de idade` | Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.|

 */

console.log('-----Exercio 35------')

let anoAtual = 2021;

function anoNascimento (ano) {
    let idade = anoAtual - ano;

    if (idade >= 18) {
        console.log('Você é maior de idade.')
    } else {
        console.log('Você é menor de idade.')
    }
}
anoNascimento(1990)

