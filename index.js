const express = require('express')
const mongoose = require('mongoose')
const Person = require('./models/Person')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI 

mongoose.connect(MONGO_URI)
.then(()=>console.log('Database Connected Successfuly'))
.catch((err)=>console.log(err))
// let test = Person.create({
//     name:"Amal",
//     age:'21',
//     favoriteFoods:['Pizza','Lasagne','Libanais']
// },async(err,data)=>{
//     if (err) throw err
//     await console.log(data)

// })














app.listen(5000,()=>{
    console.log('Server Is Running On Port 5000')
})