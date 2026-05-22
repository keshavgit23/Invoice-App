const table_body = document.querySelector(".tbody")
const sub_total_row = document.querySelector(".sub-total")
const tax_row = document.querySelector(".tax_row")
const total_val = document.querySelector(".total-amount-value")
console.log("Total amount row", total_val)

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
    <td class="three-dot-row">
    <button class="three-dot-svg">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg>
    </button>
    </td>
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