let starIn = document.querySelectorAll(`.fa-star`)
let emojielm = document.querySelectorAll(`.fa-regular`)

starIn.forEach((star,index) => {
    star.addEventListener("click",() => {
        updaterating(index)
        
    })
})

function updaterating(index) {
    starIn.forEach((starIn,idx) => {
        if (idx <= index) {
            starIn.classList.add("active")
        }
        else {
            starIn.classList.remove("active")
        }
    })

    emojielm.forEach((all) => {
        all.style.transform = `translate(-${index * 50}px)`
    })
}

