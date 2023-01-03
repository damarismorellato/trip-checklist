const form = document.getElementById("novoItem");
const lista = document.getElementById("lista")


form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    addItem(evento.target['nome'].value, evento.target['quantidade'].value)
})

function addItem(nome, quantidade) {
    const newElement = document.createElement('li')
    newElement.classList.add('item')

    const numberItem = document.createElement('strong')
    numberItem.innerHTML = quantidade

    newElement.appendChild(numberItem)
    newElement.innerHTML += nome

    lista.appendChild(newElement)

}