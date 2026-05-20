const table_body = document.querySelector(".tbody")
const sub_total_row = document.querySelector(".sub-total")
const tax_row = document.querySelector(".tax_row")
const total_val = document.querySelector(".total-amount-value")
console.log("Total amount row",total_val)

export function addTableRow(name, desc, qty, unit_price, line_total) {
    let newRow = document.createElement("tr")
    // console.log(newRow)
    newRow.classList.add("bottom-border")
    newRow.innerHTML =
        `<tr>
    <td>${name}</td>
    <td>${desc}</td>
    <td>${qty}</td>
    <td>${unit_price}</td>
    <td>${line_total}</td>
</tr>`
    table_body.prepend(newRow)
}

export function appendSubTotal(subTotal) {
    sub_total_row.textContent = `${subTotal}`
    // console.log("New Sub",sub_total_row)
}

export function appendTax(tax_value) {
    tax_row.textContent = `${tax_value}`
    console.log("Tax row:", tax_row)
}

export function appendTotal(total_value) {
    total_val.textContent = `${total_value}`
    console.log("Total amt:", total_val)
}