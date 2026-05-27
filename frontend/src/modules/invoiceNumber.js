let in_num = document.querySelector(".invoice-number-head");
console.log(in_num)

let inCount = localStorage.getItem("inCount") || 1
console.log(typeof inCount)
console.log("In count:", inCount)

export function invoiceNumber() {
    const invoice = `${String(inCount).padStart(3, "0")}`
    inCount++

    console.log("LocalStotarge", inCount)
    localStorage.setItem("inCount", (inCount))
    console.log("After inCount:", inCount)

    let invoice_num = in_num.textContent = `INV-2026-${invoice}`
    console.log("invoice_num", invoice_num)

    return invoice_num
}