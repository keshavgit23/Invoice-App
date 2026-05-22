import { invoiceData } from "./invoiceData.js"
let customerName = document.querySelector(".name")
let customerAddress = document.querySelector(".address")
let customerCity = document.querySelector(".city")
let customerCountry = document.querySelector(".country")
let customerEmail = document.querySelector(".email")
let customerPhone = document.querySelector(".phone")

export function billTo() {
    customerName.textContent = invoiceData.customer.name
    customerAddress.textContent = invoiceData.customer.address[0]
    customerCity.textContent = invoiceData.customer.address[1]
    customerCountry.textContent = invoiceData.customer.address[2]
    customerEmail.textContent = invoiceData.customer.email
    customerPhone.textContent = invoiceData.customer.phone
}