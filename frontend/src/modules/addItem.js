const addBtn = document.getElementById("addItemBtn")
const modal = document.getElementById("modal")

export function addItem() {
    addBtn.addEventListener("click", () => {
        modal.style.display = "flex"
        modal.classList.remove("hidden")
    })
}