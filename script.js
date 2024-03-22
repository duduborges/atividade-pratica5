/*
----------- 1 --------------
let idade = 0 
while (idade !== 999) {
    idade = Number(prompt("Digite a idade do aluno"))
}
*/



/*
----------- 2 --------------

let salarioM = 0
let salarioF = 0

for (let i = 0; i < 10  ; i++) {
    let sexo = prompt("Digite seu sexo (M / F)").toLowerCase()
    let salario = Number(prompt("Digite seu salario"))
    if (sexo == "m") {
        salarioM += salario
    } else if (sexo == "f") {
        salarioF += salario
    }
}
console.log("Salario pagos aos homens: " + salarioM)
console.log("Salario pagos aos mulheres: " + salarioF)
*/


/*
----------- 3 --------------

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
----------- 4 --------------

let sexo = prompt("Digite seu sexo (M / F)")
let compras = Number(prompt("Digite seu salário"))


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
----------- 5 --------------

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
----------- 6 --------------
let largura = Number(prompt("Digite a largura do terreno"))
let comprimento = Number(prompt("Digite a comprimento do terreno"))

let area = (largura * comprimento)
if (area < 100) {
    alert("Terreno popular")
} else if (area >= 100 && area < 500) {
    alert("Terreno master")
} else if (area > 500) {
    alert("Terreno VIP")
}
*/

