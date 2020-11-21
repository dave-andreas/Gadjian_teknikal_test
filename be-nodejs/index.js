const express=require('express')
const app=express()
const BodyParser=require('body-parser')
const cors=require('cors')
const bearerToken=require('express-bearer-token')

const PORT= process.env.PORT || 1234

app.use(cors())
app.use(bearerToken())
app.use(BodyParser.json())

app.get('/',(req,res)=>{
    res.status(200).send("welcome to david's express api")
})

const {router} = require('./routers')
app.use('/api',router)

app.listen(PORT,()=>console.log('API aktif di '+PORT))
