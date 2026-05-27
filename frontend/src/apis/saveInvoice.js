import { API_BASE_URL } from "../config";

const saveInBtn = document.querySelector(".save-invoice")

export function saveInvoice(){
    saveInBtn.addEventListener("click",async()=>{
        let res = await fetch(`${API_BASE_URL}/api/invoices`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                
            })
        })
    })
}