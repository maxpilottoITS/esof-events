const add = document.querySelector("#add")
const list = document.querySelector("#list")
const rating = document.querySelector("#rating")
const title = document.querySelector("#corso")
const counter = document.querySelector("#counter")
const corsi = document.querySelector("#corsi")

let news = 0

updateCounter(0)

corsi.addEventListener("click", () => {
    updateCounter(news = 0)
})

add.addEventListener('click', () => {
    const itemNode = document.createElement("ion-item")
    let ratingNode = ""

    if (title.value == "") {
        showToast("Il nome del corso non può essere vuoto!","danger")
        return
    }

    for (let i = 0; i < rating.value; i++) {
        ratingNode += "<ion-icon name='heart'></ion-icon>"
    }

    itemNode.innerHTML += "<div>" + title.value + "</div>"
    itemNode.innerHTML += "<div>" + ratingNode + "</div>"

    list.appendChild(itemNode)

    updateCounter(++news)
})

function updateCounter(count){
    counter.innerHTML = count

    if (count <= 0){
        counter.style.display = "none"
    }else{
        counter.style.display = "block"
    }
}

function showToast(message, color = "light") {
    const toast = document.createElement('ion-toast')

    toast.message = message
    toast.duration = 2000
    toast.color = color

    document.body.appendChild(toast)
    return toast.present()
}