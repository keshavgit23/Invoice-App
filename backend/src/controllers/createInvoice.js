import {insertInvoice} from '../services/insertInvoice.js'
export async function createInvoice(req,res){
    try{
        const invoiceData = req.body
        console.log(invoiceData)
        const response = await insertInvoice(invoiceData)

        res.status(200).json({
            success: true,
            data: result
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}