import {Pool} from 'pg'
import dotenv from 'dotenv'
dotenv.config()

export const pool = new Pool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    name:process.env.DB_NAME,
    port:process.env.DB_PORT
});

export const connectionDB = async()=>{
    try{
    const client = await pool.connect()
    console.log("DB connected successfully!")
    client.release()
    }catch(err){
        console.log("DB connection failed!",err.message)
        process.exit()
    }
}