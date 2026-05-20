export function toggleState(items) {
    console.log(items)
    try {
        if (!items) {
            console.log("Empty or undefined")
            throw new Error("Empty or undefined!")
        }
        const emptyState = document.getElementById("empty-state")
        const invoiceTable = document.getElementById("invoice-table-state")
        if (items.length === 0) {
            emptyState.style.display = "block"
            invoiceTable.style.display = "none"
        } else {
            emptyState.style.display = "none"
            invoiceTable.style.display = "table"
        }
    } catch (err) {
        console.log("Toggle State Error:", err)
    }
}
