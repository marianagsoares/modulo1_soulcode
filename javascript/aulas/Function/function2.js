const num = parseInt(prompt(`informe o primeiro número:`))

const num2 = parseInt(prompt(`informe o segundo número:`))

function maiorValor (a, b){
    if (a>b){
        return alert(a)
    }
    else{
        return alert(b)
    }
}
maiorValor(num, num2)