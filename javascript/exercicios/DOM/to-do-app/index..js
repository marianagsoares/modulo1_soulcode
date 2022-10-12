//const todoForm = document.getElementsByTagName('form')
//console.log(todoForm)

const todoForm = document.getElementById('todo-form')
const todos = [] //array
//todoForm.addEventListener('submit', adicionar)
//function adicionar (){
//}

todoForm.addEventListener('submit', function(evento){ //funcao vazia
    evento.preventDefault() //cancela o comportamento padrão de um elemento aconteça que é recarregar página
    evento.stopPropagation //evita que o evento padrão de um elemento se propague
    const todoInput = document.querySelector('#todo')
    todos.push(todoInput.value) //guarde o valor do todoInput no array todos através de todos.push
    todoInput.value=''
    console.log(todos)
    renderizarTodos()
})

function renderizarTodos(){
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = ''
   // for (cont=0;cont<todos.length;cont++){
       // console.log(cont)
   // }
    for(let tarefa  of todos){
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')
        console.log(divCard)

        const divCardBody = document.createElement('div')
        divCardBody.classList.add("card-body", "d-flex","align-items-center")

        const pTodoText = document.createElement('p')
        pTodoText.classList.add("todo-text", "flex-grow-1", "text-truncate")
        pTodoText.innerHTML = tarefa

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        btnDelete.addEventListener('click', () =>{

           const index = todos.indexOf(tarefa)
           todos.splice(index, 1)
           renderizarTodos()

           //splice exclui um determinado valor do seu array a partir do seu índice
        })

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        btnDelete.appendChild(spanIcon)
        //divCardBody.appendChild(pTodoText)
        //divCardBody.appendChild(btnDelete)
        divCardBody.append(pTodoText, btnDelete) // append coloca um ou mais elemento html dentro do outro elemento

        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)
                
     }
}