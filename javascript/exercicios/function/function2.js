function equacao2Grau (a, b, c){
    const delta = Math.pow(b, 2) - 4 * a * c
    const raizDelta = Math.sqrt(delta)
    
    const x1 = (-b + raizDelta) / (2 * a)
    const x2 = (-b - raizDelta) / (2 * a)
    return [x1, x2]
}
alert(equacao2Grau (1,2,-3))