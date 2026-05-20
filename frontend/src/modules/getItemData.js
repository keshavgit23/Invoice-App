import { addTableRow, appendSubTotal, appendTax, appendTotal } from "./addTableRow.js"
import { lineTotal, subTotal } from "../utils/calculations.js"
import { toggleState } from "./toggleTableState.js"
import { taxCalculation } from "../utils/calculations.js"
import { totalAmount } from "../utils/calculations.js"
const addItem = document.getElementById("addItemToRow")


function getItemName() {
    try {
        let item_name = document.querySelector(".itemName").value
        if (item_name === "") {
            throw Error("Item Can't be empty!")
        } else if (!isNaN(Number(item_name))) {
            throw Error("Item name must be a string")
        } else {
            return item_name
        }
    } catch (err) {
        console.log("Error:", err)
    }
}
function getItemDesc() {
    try {
        let item_desc = document.querySelector(".itemDesc").value
        if (item_desc === "") {
            throw Error("Item Description Can't be empty!")
        } else if (!isNaN(item_desc)) {
            throw Error("Item description must be a string")
        } else {
            return item_desc
        }
    } catch (err) {
        console.log("Error:", err)
    }
}

function getItemQty() {
    try {
        let item_qty = document.querySelector(".itemQty").value
        // console.log(item_qty)
        if (item_qty === "") {
            throw Error("Item Quantity can't be empty!")
        } else if (item_qty <= 0) {
            throw Error("Item Quantity can't be zero or negative")
        } else {
            return item_qty
        }
    } catch (err) {
        console.log("Error:", err)
    }
}

function getUnitPrice() {
    try {
        let unit_price = document.querySelector(".unitPrice").value
        // console.log(item_qty)
        if (unitPrice === "") {
            throw Error("Unit price can't be empty!")
        } else if (unit_price <= 0) {
            throw Error("Unit Price can't be zero or negative")
        } else {
            return unit_price
        }
    } catch (err) {
        console.log("Error:", err)
    }
}

export function getItemData() {
    return {
        name: getItemName(),
        description: getItemDesc(),
        quantity: getItemQty(),
        unit_price: getUnitPrice()
    }
}

export function callAppendRow() {
    addItem.addEventListener("click", (e) => {
        e.preventDefault()
        let items = []
        try {
            let item = getItemData()
            if (!item.name || !item.description || !item.quantity || !item.unit_price === "") {
                throw Error("Enter all fields!")
            } else {
                items.push(item)
                let line_total = lineTotal(item.quantity, item.unit_price)
                console.log(line_total)

                let sub_total = subTotal(line_total)
                console.log(sub_total)

                let tax_row = taxCalculation(sub_total)

                let total_val = totalAmount(tax_row)
                console.log("Total Value:", total_val)

                let table_row = addTableRow(item.name, item.description, item.quantity, item.unit_price, line_total)
                console.log("Table row", table_row)

                let show_sub_total = appendSubTotal(sub_total)

                let append_tax = appendTax(tax_row)

                let appendTotalAmount = appendTotal(total_val)
                console.log("Append total amt", appendTotalAmount)

                let toggle_table_state = toggleState(items)
                console.log("Table state", toggle_table_state)
            }
        } catch (err) {
            console.log("Item Form Error: ", err)
        }
    })
}