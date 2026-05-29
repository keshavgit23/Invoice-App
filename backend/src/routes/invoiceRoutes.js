import express from 'express'
import {createInvoice} from '../controllers/createInvoice.js'
const router = express.Router()

router.get('/',(req,res)=>{
    res.send({
        message:"Invoice routes working"
    })
})

router.post('/',createInvoice)

export default router