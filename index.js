const add = document.querySelector("#add")
const del = document.querySelector("#delete")
const list = document.querySelector("#expenseList")
const total = document.querySelector("#total")

const history = []

add.addEventListener('click', () => {
    const title = document.querySelector("#title").value
    const cost = document.querySelector("#import").value
    const node = document.createElement("ion-item")

    node.innerHTML = "<ion-label>" + title + " " + cost + "$</ion-label>"

    history.push(new Expense(title,cost))
    list.appendChild(node)
    total.textContent = (parseInt(total.textContent) + parseInt(cost))
})

class Expense{
    constructor(title,cost){
        this.title = title
        this.cost = cost
    }
}