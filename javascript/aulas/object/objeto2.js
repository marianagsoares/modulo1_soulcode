let ende = {
    rua: `rua principal`,
    numero: 456,
    estado: `BH`,
    complemento: `sem complemento`
}

/*objeto literal*/
let exemplo02 = {
    nome: `Joana`, /*necessário colocar ,*/
    idade: 23,
    cpf: `123.123.123`,
    altura: 156,
    endereco:{...ende}, /*distructure*/
    /*endereco:ende,*/
    solteiro: true,
    habilidades: [`React`, `Java`, `JavaScript`],
    cumprimentar(){
        console.log(`Olá, meu nome é ${this.nome}`)
        /*para referenciar um objeto dentro dele mesmo, utilizo .this*/
    }
}

console.log(ende.rua)
console.log(exemplo02.endereco.rua)

/**/
