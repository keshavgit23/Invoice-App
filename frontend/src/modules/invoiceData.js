import { invoiceNumber } from "./invoiceNumber.js"
let inNumber = invoiceNumber()

export const invoiceData = {
    invoice_number: `${inNumber}`,
    dates: {
        issue_date: "20 March 2026",
        due_date: "27 March 2026"
    },
    customer: {
        name: "Vishal Corporation",
        email: "suport@acmecorp.com",
        phone: "+91 9867368576",
        address: [
            "123 Bussiness Street xyz 500", "New York NY 10021", "United America"]
    },
    payment: {
        status: "Pending",
        method: "UPI",
        amount_paid: "2000"
    },
    items: {
        item:["Web Design", "Hosting"],
        description: ["Custom Website Design","1 Year Hosting"],
        quantity: [1,1],
        unit_price:[2000, 120],
        amount:[2000,120]
    },
    notes: ""
}