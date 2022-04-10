import { MongoClient } from 'mongodb'
import express from 'express'



const client = new MongoClient('mongodb://127.0.0.1:27017/casino')
const app = express()


app.get('/slots', (req, res) => {

    return res.status(200).send()
})