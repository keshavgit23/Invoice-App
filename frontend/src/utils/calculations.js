import { getItemData } from "../modules/getItemData.js"

export function lineTotal(quant, unit_price) {
    // console.log("Item unit price: ", unit_price)
    // console.log("Item quantity: ", quant)

    return quant * unit_price
}

let sub_total = []
export function subTotal(item_amount) {
    // console.log(item_amount)
    sub_total.push(item_amount)

    // console.log("Sub yotalS", sub_total)
    // console.log("Sub Total", sub_total.length)

    let sum = 0
    sub_total.forEach(i => {
        sum += i
    });
    console.log("Sub Total after sum", sum)

    return sum
}

export function taxCalculation(value) {
    console.log("After Tax value: ", value * 0.08)
    return value * 0.08
}

export function totalAmount(total_val) {
    console.log("Total amount: ", Math.floor(total_val))

    return Math.floor(total_val)
}