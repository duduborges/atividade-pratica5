/*
------------1
let idade = 0
while (idade !== 999) {
    idade = Number(prompt("Digite a idade do aluno"))
}
*/



/*
2. Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário.

em um loop{}
passo1 - ler o sexo
passo 2- ler o salario 
passo 3- se o sexo for f, soma salario
passo 4- se o sexo for m, soma salario
}
*/

/*

-------------- 3
let primeiroValor = Number(prompt("Digite o primeiro Valor: "))
let ultimoValor = Number(prompt("Digite o último Valor: "))
let incremento = Number(prompt("Digite o incremento: "))
console.log("Contagem:")

while (primeiroValor < ultimoValor) {
    primeiroValor += incremento
    console.log(primeiroValor)
}
console.log("Acabou!")
*/






/*
----------- 4
if (sexo == "f") {
    let percentual = 0.13
    let valorNovo = compras * percentual
    let desconto = compras - valorNovo
    console.log("O valor da sua compra ficou R$", desconto)
} else if (sexo == "m") {
    let percentual = 0.05
    let valorNovo = compras * percentual
    let desconto = compras - valorNovo
    console.log("O valor da sua compra ficou R$", desconto)
} else {
    alert("Sexo não reconhecido!")
}
*/

/*

----------- 5
let distancia = Number(prompt("Digite a distancia que deseja percorrer"))
let valor = 0
if (distancia <= 200) {
    valor = 0.50
} else if (distancia > 200) {
    valor = 0.45
}
alert("O valor da passagem é: R$" + valor * distancia)
*/

/*

6. Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP
*/