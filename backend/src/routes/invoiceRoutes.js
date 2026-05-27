import express from 'express'

const router = express.Router()

router.get('/',(req,res)=>{
    res.send({
        message:"Invoice routes working"
    })
})

router.post('/',(req,res)=>{
    res.status(200).json({
        message: "invoice data stored successfully",
        body: req.body
    })
})

export default router