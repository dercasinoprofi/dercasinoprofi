import { MongoClient } from 'mongodb'
import express from 'express'



const client = new MongoClient('mongodb://127.0.0.1:27017/casino')
const app = express()

async function run() {
    try {
        await client.connect()
        await client.db("admin").command({ ping: 1 })
        console.log("connected to db")
    } finally {
        await client.close()
    }
}


app.get('/slots', (req, res) => {
    return res.status(200).send()
})


app.listen(3001, () => { console.log("api server running") })