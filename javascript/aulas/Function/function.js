/*Parametros sao valores passados para as funcoes para que elas utilizem esses valores dentro dela*/


function cumprimentar (mensagem){ 
   
    alert(`Olá mundo ${mensagem}`)
}
cumprimentar("Olá mundo")
cumprimentar("Eu gosto do Java Script")
/*CONCATENOU OS DOIS VALORES*/

function cumprimentar(mensagem){ 
   
    document.write(`<p>${mensagem}<\p>`)
}
cumprimentar("Olá mundo")
cumprimentar("Eu gosto do Java Script")
cumprimentar("Eu aprendo funções")
/*CADA VEZ QUE CHAMEI A FUNÇÃO ELA FOI ENTENDIDA COMO UM PARÁGRAFO*/

/*o parâmetro fica mais claro indicando que ele não está sendo usado*/
function cumprimentar (mensagem, repetir) { 
   for(cont=1;cont<=repetir;cont++) {
    alert(mensagem/*.toUpperase()*/)
    }
} 
cumprimentar("Olá mundo", 3)
/*cumprimentar("Eu gosto do Java Script")*/

function soma(num, num2) {
    return alert(num + num2)
    /*resulado = num + num2
    return resultado*/
}
soma(8, 8)

/*ISSO NAO SERA EXECUTADO*/
/*resultado = soma(7 + 8)
console.log(`O valor da variável resultado é ${resultado}`)*/
/*ISSO NAO SERA EXECUTADO*/

/**soma(7.5, 7)
soma(9, 10)
soma(2, 3)**/

function maiorValor (a, b){
    if (a<b){
        return alert(a)
    }
    else{
        return alert(b)
    }
}

maiorValor(4, 8)