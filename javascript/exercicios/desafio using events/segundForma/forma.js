let contador = 1
function mostrarAlerta() {
/*Essa função será executada quando eu clicar no botao "Clique no botão"*/
    if(contador == 1){
        document.getElementById('mensagem').innerHTML = "você clicou " + contador++ + " vez.";
    }
    else{
        document.getElementById('mensagem').innerHTML = "você clicou " + contador++ + " vezes."; 
    }
    const divchameAviso = document.getElementById('chameAviso')
    divchameAviso.classList.add('mostrar')
}

function fecharAlerta(){
/*Essa função será executada quando eu clicar no x*/
contador = 1
const divAlerta = document.getElementById('chameAviso')
divAlerta.classList.add('botaoFechar')

}

const buttonShow = document.getElementById('botaoMostrar')
/*criei a constante que irá mostrar o botao quando eu clicar*/
const buttonClose = document.getElementById('botaoFechar')
/*criei a constante que irá fechar o botao quando eu clicar*/

buttonShow.addEventListener('click', mostrarAlerta)
/* constante buttonShow escute meu click e execute a função mostrarAlerta*/

buttonClose.addEventListener('click', fecharAlerta )