import { invoiceData } from "./invoicedata.js";

let issueDate = document.querySelector(".issue-date").children[1]
let dueDate = document.querySelector(".due-date").children[1]
let inNumber = document.querySelector(".invoice-number").children[1]
let paymentDue = document.querySelector(".payment-due").children[1]
// console.log(paymentDue)
let paymentAmount = invoiceData.payment.amount_paid
let customerName = document.querySelector(".customer-details").children[1]
let statusDetails = document.querySelector(".status-details").children[1]

export function invoiceDetails() {
    issueDate.textContent = invoiceData.dates.issue_date
    dueDate.textContent = invoiceData.dates.due_date
    inNumber.textContent = invoiceData.invoice_number
    paymentDue.textContent = `$${paymentAmount}.00`
    customerName.textContent = invoiceData.customer.name
    statusDetails.textContent = invoiceData.payment.status
}