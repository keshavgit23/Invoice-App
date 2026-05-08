let in_num = document.querySelector(".invoice-number-head");
console.log(in_num)

let inCount = localStorage.getItem("inCount") || 1
console.log(typeof inCount)
export function invoiceNumber() {
    const invoice = `${String(inCount).padStart(3, "0")}`
    inCount++
    localStorage.setItem("inCount", (inCount))

    in_num.textContent = `INV-2026-${invoice}`
}
