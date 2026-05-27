import { getInvoiceData } from "./invoiceData.js";


let demo = getInvoiceData()
console.log("Demo: ",demo)
let issueDate = document.querySelector(".issue-date").children[1]
let dueDate = document.querySelector(".due-date").children[1]
let inNumber = document.querySelector(".invoice-number").children[1]
console.log("details in", inNumber)
let paymentDue = document.querySelector(".payment-due").children[1]
let paymentAmount = demo.payment.amount_paid

// console.log(paymentDue)
// console.log("payment amty",paymentAmount)
let customerName = document.querySelector(".customer-details").children[1]
let statusDetails = document.querySelector(".status-details").children[1]
console.log | ("In details:", demo)

export function invoiceDetails() {
    try {
        if (!demo) {
            throw new Error("InDetails in empty!")
        } else {
            issueDate.textContent = demo.dates.issue_date
            dueDate.textContent = demo.dates.due_date
            inNumber.textContent = demo.invoice_number
            paymentDue.textContent = `$${paymentAmount}.00`
            customerName.textContent = demo.customer.name
            statusDetails.textContent = demo.payment.status
        }
    } catch (err) {
        console.log('Error: ', err.message);
    }
}