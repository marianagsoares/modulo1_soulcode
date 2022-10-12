// E &&
// OU || 
// negação !

console.log(5<3 && 7<9); //false
console.log(7<3 && 3<7); //false
console.log(3<7 && 4<5);//true

//Para retornar verdadeiro as duas condições precisam ser verdadeiras

console.log(5<3 || 9<7);//false
console.log(7<3 || 3<7);//true
console.log(3<7 || 4<5);//true

//Para retornar true apenas uma das condições precisam ser verdadeiras

let verificar = false
if (!verificar) 
{
   console.log("O resultado dessa verificação foi verdadeiro por isso, o que está em aspas será executado")
   //essa mensagem será exibida na tela
}

let verificar2 = true
if (!verificar2) 
{
   console.log("O resultado dessa verificação foi verdadeiro por isso, o que está em aspas será executado")
   //essa mensagem não será exibida na tela
}