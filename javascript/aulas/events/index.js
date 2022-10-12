/*criar uma função que mostra o alerta na tela*/

function mostrarAlerta(){
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
    }

    function fecharAlerta(){
        const divAlerta = document.getElementById('alerta')
        divAlerta.classList.remove('mostrar')
    }

    const btnMostrar= document.getElementById('mostrar')
    const btnFechar = document.getElementById('fechar')

    btnMostrar.addEventListener('click', mostrarAlerta)
    btnFechar.addEventListener('click', fecharAlerta )