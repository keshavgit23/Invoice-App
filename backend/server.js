import express from 'express'
import cors from 'cors'
import { pool, connectionDB } from './src/config/db.js'
import invoiceRoutes from './src/routes/invoiceRoutes.js'

let app = express()
let PORT = 5000

const allowedOrigins = [
    "http://127.0.0.1:5500",
    "http://localhost:5000",
]
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) {
            return callback(null, true)
        }

        if (allowedOrigins.includes(origin)) {
            return callback(null, true)
        }
        return callback(null, false);
    },
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

const connt = connectionDB()
console.log(connt)

console.log("Pool", pool)
app.use(express.json()) //built in middleware

// app.use('/api/invoices', invoiceRoutes) //route import

app.use('/api/invoices',invoiceRoutes)

app.get('/', (req, res) => {
    res.send("Backend running")
})
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})