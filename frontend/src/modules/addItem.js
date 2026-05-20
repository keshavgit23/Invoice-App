const addBtn = document.getElementById("addItemBtn")
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("closeItemBtn")

export function addItem() {
    addBtn.addEventListener("click", () => {
        modal.style.display = "flex"
        modal.classList.remove("hidden")
    })
}

export function closeItem() {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none"
        modal.classList.add("hidden")
    })
}