const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = [] //tudo que o usuário digitar vai para este array.

newListForm.addEventListener('submit', function(e){
    e.preventDefault() //inibe que a página recarregue 
    const listName = newListInput.value
    if(listName === null || listName === '') return

    const list = createList(listName)
    newListInput.value = null
    lists.push(list) //incluir itens no final do array
    render()
})

function createList(name){
    return {id: Date.now().toString(), name: name, }
}

function render(){
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement('li') //cria elementos no html
        item.classList.add //adiciona uma class na lista de classes
        item.innerText = list.name
        listContainer.appendChild(item) //vai receber a div do html
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}



render()