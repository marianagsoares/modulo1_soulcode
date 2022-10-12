

function delta (a, b, c)
{
    const valorDelta = Math.pow(b, 2) - 4 * a * c

    const raizDelta = Math.sqrt(valorDelta)
    
    return raizDelta
}

alert(delta(1, 2, -3))

function resultadoX1 (a, b, c)
{
    const resultado = (- b + delta(a, b, c))/2 * a
    return alert(resultado)
}
resultadoX1(1, 2, -3)


function resultadoX2 (a,  b, c){
    const resultado = (- b - delta(a,b,c)) /2 * a
    return alert(resultado)
}
resultadoX2(1, 2, -3)