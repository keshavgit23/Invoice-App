export async function insertInvoice(data,subtotal,tax,total) {

    const query = `INSERT INTO invoices(invoice_number,status,issue_date,due_date,customer_name,customer_address,customer_phone,customer_email,sub_total,tax_rate,tax_amount,total_amount,customer_note,created_at VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
    RETURNING * `

    const values = [data.invoice_number,data.payment.status,data.dates.issue_date,data.dates.due_date,data.customer.name,data.customer.address,data.customer.phone,data.customer.email,data]
}