for(let contador = 0;contador <= 10; contador++)
{   console.log(contador)

    if(contador == 8){
        console.log("Número certo encontrado!!")
    }else{
        console.log("número errado")
    }
}
//número é ímpar ou par (resolver com laço)
let numeros = 20

for(let contador = 0; contador <=numeros; contador ++ ){
    if(contador % 2 == 0){
        console.log(contador + "é Par")
    }else{
        console.log(contador + " é Ímpar")
    }

}
// Registrar 3 nomes
let nomes = ["Carlos", "Ronaldo","Odirley", "Cinthia"];
for(let contador = 0; contador <nomes.length; contador ++){
    console.log(nomes[contador])
}