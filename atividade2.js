let numero = -1

if (numero > 0){
    console.log("O número é positivo")
}
else if (numero < 0){
    console.log("O número é negativo")
}else{
    console.log("O número é zero")
}


numero = 5 

if (numero % 2 === 0){
    console.log("O número é par")
}else {
    console.log("O número é ímpar")
}
let quatidadedefatias = 32
let quantidadedealuno = 9

console.log( Math.floor (quatidadedefatias / quantidadedealuno))
console.log(quatidadedefatias % quantidadedealuno)

if (quatidadedefatias % quantidadedealuno === 0){
    console.log("A fatia é dividida igualmente")
}else {
    console.log("A fatia não é dividida igualmente")
}
 let idade = 16
if (idade >= 16){
    console.log("Você pode votar")
} 
else if (idade < 16)
{ console.log("Você não pode votar")
}