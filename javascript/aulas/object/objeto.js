/*Oestrutura que permite organizar dados na forma de chave-valor*/

let exemplo01 = {
    nome: `Joana`,
    idade: 23,
    cpf: `123.123.123`,
    altura: 156,
    endereco:{
        rua: `rua`,
        numero: 456,
        estado: `BH`,
        complemento: `sem complemento`
    }, /*necessário colocar ,*/
    solteiro: true,
    habildiades: [`React`, `Java`, `JavaScript`]
}

let ende = {
    rua: `rua`,
    numero: 456,
    estado: `BH`,
    complemento: `sem complemento`
}

/*objeto literal*/
let exemplo02 = {
    nome: `Joana`,
    idade: 23,
    cpf: `123.123.123`,
    altura: 156,
    endereco:ende, /*necessário colocar ,*/
    solteiro: true,
    habilidades: [`React`, `Java`, `JavaScript`],
    cumprimentar(){
        console.log(`Olá, meu nome é ${this.nome}`)
        /*para referenciar um objeto dentro dele mesmo, utilizo .this*/
    }
}
console.log(ende)/*tudo que ta dentro do ende*/

console.log(exemplo02.habilidades[2]) /*Javascript*/

/*do objeto exemplo02 pegue a propriedade habilidades*/
/*do objeto exemplo02 pegue o 2 valor da propriedade habilidades*/

console.log(exemplo02.endereco.estado)/*BH*/

/*pegue o estado que ta dentro do endereco que ta dentro de exemplos02*/
/*cubo azul: propriedade*/
/*cubo roxo: método*/
exemplo02.cumprimentar()

exemplo02.nome = `Pablo` 
exemplo02.cumprimentar()
/*mudar nome de joana para Pablo*/


exemplo02.habilidades.push(`Angular`)
console.log(exemplo02.habilidades)
/*adicionou mais uma propriedade ao método habilidades que ta dentro do objeto exemplo02*/

console.log(exemplo02['cpf'])