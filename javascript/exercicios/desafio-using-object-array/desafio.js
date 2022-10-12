const produtos = []

let produto = {
    nome:'',
    marca:'',
    imagem:'',
    preco:0,
    estoque:0,
    valorTotal:0
}

for(cont=0;cont<2;cont++){
    alert(`${cont +1}ª PRODUTO!`)
    produto.nome = (prompt("Digite o produto que deseja: "))
    produto.marca = prompt("Digite a marca: ") /* =  produto.marca = marcaPrdouto[cont]*/
    produto.imagem = prompt("Qual a imagem do produto? ")
    produto.preco = parseFloat(prompt("Digite o preço unitário: "))
    produto.estoque = parseFloat(prompt("Digite a quantidade do produto em estoque: "))
    produto.valorTotal = produto.preco * produto.estoque


    produtos.push({ ...produto }) /*fazendo isso, produto e sua atb quando inseridos no array produtos não terá o mesmo valor de referência*/
    

    //empurrando o produto com suas propriedades para dentro do array chamado produtos
}

for(cont=0;cont<2;cont++){

    document.write (`${produtos[cont].nome} <br>`) /*produtos[cont] é equivalente ao meu produto com suas propriedades e eu chamo a propriedade do meu produto*/
    document.write (`${produtos[cont].marca} <br>`)
    document.write (`<img src="${produtos[cont].imagem}" alt=""></img><br>`)
    document.write (`${produtos[cont].preco} <br>`)
    document.write (`${produtos[cont].estoque} <br>`)
    document.write (`O valor total é ${produtos[cont].valorTotal} <br>`)
    document.write (`---------------------------------- <br>`)
}

