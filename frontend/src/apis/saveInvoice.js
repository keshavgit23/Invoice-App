import { API_BASE_URL } from "../config";
import { getInvoiceData } from "../modules/invoiceData";

const saveInBtn = document.querySelector(".save-invoice")

export function saveInvoice() {
    let data = getInvoiceData()
    try {
        if (!data) {
            throw new Error("Invoice Data is empty")
        } else {
            saveInBtn.addEventListener("click", async () => {
                let res = await fetch(`${API_BASE_URL}/api/invoices`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
            })
        }
    } catch (err) {
        console.log("Erroe at /api/invoices", err.message)
    }
}