import { getInvoiceData } from "./invoiceData.js"

let inData = getInvoiceData()
let customerName = document.querySelector(".name")
let customerAddress = document.querySelector(".address")
let customerCity = document.querySelector(".city")
let customerCountry = document.querySelector(".country")
let customerEmail = document.querySelector(".email")
let customerPhone = document.querySelector(".phone")

export function billTo() {
    customerName.textContent = inData.customer.name
    customerAddress.textContent = inData.customer.address[0]
    customerCity.textContent = inData.customer.address[1]
    customerCountry.textContent = inData.customer.address[2]
    customerEmail.textContent = inData.customer.email
    customerPhone.textContent = inData.customer.phone
}