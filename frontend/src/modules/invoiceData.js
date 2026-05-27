import { invoiceNumber } from "./invoiceNumber.js"
let inNumber = invoiceNumber()

// let saveItemArray = []
// export function getItems(items) {
//     saveItemArray.push(items)
//     console.log('How many elems in saveItemArray: ', saveItemArray);

//     console.log("TYpe of Get Items", typeof (saveItemArray))

//     console.log("Get Items", saveItemArray)
//     // console.log(JSON.stringify(saveItemArray, null, 2))
//     console.log("Items len in getItems", saveItemArray.length)
//     // console.log("Name", saveItemArray[0][0].name)
//     // console.log("Description", saveItemArray[1][0].description)
//     // console.log("quantity", saveItemArray.quantity)

//     let flatItems = saveItemArray.flat(Infinity)
//     console.log("After flat", saveItemArray)
//     console.log("After infinity flat")
//     // console.log(JSON.stringify(flatItems, null, 2))
//     // // console.log(flatItems[0].name)
//     // // console.log(flatItems[0].description)

//     return flatItems
// }

export function setInvoiceData(items) {
    console.log("Items pass:",items)
    try {
        if (!items) {
            throw new Error("Data is empty!")
        } else {
            invoiceData.items = items
            console.log("Items set", invoiceData.items = items)
        }
    } catch (err) {
        console.log("Error: ", err.message)
    }
}

export function getInvoiceData() {
    console.log("GetInvoiceData: ", invoiceData)
    console.log(JSON.stringify(invoiceData,null,4))
    return invoiceData
}
//  console.log("passed data", data)
//             console.log(JSON.stringify(data, null, 2))
const invoiceData = {
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
    items: []
    ,
    notes: ""
}
console.log("Invoice Data:", invoiceData)
console.log("first item name: ", getInvoiceData().name)
